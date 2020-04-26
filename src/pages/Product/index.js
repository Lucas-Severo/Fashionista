import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as actionCreator from '../../redux/actions';

import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Search from '../../components/Search';

import './style.css';

import notFoundImage from '../../assets/notfound.png';

function Product({products, props, getProducts}) {
    const [ id, setId ] = useState(null);
    const [ size, setSize ] = useState(null);

    useEffect(() => {
        async function getData() {
            setId(props.match.params.id);
        }
        getData();
    }, [props.match.params.id]);

    const saveProduct = (ev) => {
        ev.preventDefault();
        console.log("Item selecionado: ");
        console.log(id);
        console.log(size);
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
        <div className="product" onLoad={() => getProducts()}>
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
  props
});

export default connect((mapStateToProps), actionCreator)(Product);