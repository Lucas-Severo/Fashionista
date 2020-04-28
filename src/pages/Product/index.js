import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import * as actionCreator from '../../redux/actions';

import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Search from '../../components/Search';

import './style.css';

import notFoundImage from '../../assets/notfound.png';

function Product({products, id, size, productsAmount, props, updateId, setSize, cartProducts, setCartProducts, setCartProductsAmount}) {

    useEffect(() => {
        async function getData() {
            updateId(props.match.params.id);
            setSize(null);
        }
        getData();
    }, [props.match.params.id, updateId, setSize]);

    const saveProduct = (ev) => {
        ev.preventDefault();

        // pegar o produto
        let item = products.filter(product => {
            if(product.code_color === String(id)) {
                return product;
            }
            return null
        });

        item = {...item[0], size: size}

        // pegar o código referente ao tamanho do produto
        // (sku)
        const codigo = item.sizes.filter(size_name => {
            if(size_name.size === size)
                return size_name.sku;
            return null;
        });

        item = { ...item, sku: codigo[0].sku }

        // check if the product is already in cart
        let productExists;
        for(let product of cartProducts) {
            if(product.size === item.size &&
                product.code_color === item.code_color) {
                productExists = true;
                break;
            }
            productExists = false;
        }

        // case true the product quantity is incremented
        if(productExists) {
            setCartProducts(cartProducts.map(product => {
                if(product.code_color === item.code_color &&
                    product.size === item.size) {
                    product.qtd += 1;
                }
                return product;
            }));
        }

        // else the product is added to the cart
        if(productExists !== true) {
            item.qtd = 1
            setCartProducts([...cartProducts, item]);
            setCartProductsAmount(productsAmount+1);
        }

        if(productExists === true) {
            calculateProductsAmount();
        }
    }

    const calculateProductsAmount = () => {
        const total = cartProducts.map(product => {
            return product.qtd;
        });

        const qtd = total.reduce((accumulator, number) => {
            return accumulator + number;
        }, 0);

        setCartProductsAmount(qtd);
    }

    const handleClick = () => {
        if(size == null) {
            document.querySelectorAll(".size__field").forEach(element => {
                element.style.border = "2px solid #f55"; 
            });

            setTimeout(() => {
                document.querySelectorAll(".size__field").forEach(element => {
                    element.style.border = "1px solid #ccc";
                });
            }, 2000);
        }
    }

    return (
        <div className="product">
            <Header />
            <Search />
            <Cart />
            {products.filter(product => product.code_color === id).map(product => (
                <div className="product__container" key={product.code_color}>
                    { product.image 
                        ? <img src={product.image} className="product__image" alt={product.name}/>
                        : <img src={notFoundImage} className="product__image" alt={product.name}/>
                    }
                    
                    <p className="product__name">{product.name}</p>
                    <div className="product__prices">
                        <p className="product__price">{product.actual_price}</p>
                        <p className="product__installments">em até {product.installments}</p>
                    </div>
                    <p className="product__choose">Escolha o tamanho:</p>
                        
                    <form className="product__form" onSubmit={saveProduct}>
                        <div className="product__sizes sizes">
                            {product.sizes.map(({size}) => (
                                <div key={size} className="size__field">
                                    <input className="size__button" onChange={e => {setSize(e.target.value)}} required name="sizes" value={size} type="radio" id={size}/>
                                    <label className="size__name" htmlFor={size}>{size}</label>
                                </div>
                            ))}
                        </div>
                        <button onClick={handleClick} type="submit" className="product__save">Adicionar à sacola</button>
                    </form>
                </div>
            ))}
        </div>
    );
}

const mapStateToProps = (state, props) => ({
  products: state.products,
  id: state.id,
  size: state.size,
  cartProducts: state.cartProducts,
  productsAmount: state.productsAmount,
  props
});

export default connect((mapStateToProps), actionCreator)(Product);