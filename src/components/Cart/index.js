import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreator from '../../redux/actions';

import './style.css';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import imageNotFound from '../../assets/notfound.png';

function Cart({cartProducts, setCartProducts, 
               productsAmount, setCartProductsAmount,
               totalPurchase, setTotalPurchase}) {
    function hideCart() {
        document.querySelector(".cart").classList.remove("cart--visible");
        document.querySelector(".app").classList.remove("app--scroll-lock");
    }

    function calculateTotalPurchase(array = cartProducts) {
        const total = array.reduce((accumulator, value) => {
            const parsedValue = parseFloat(value.actual_price.replace(",", ".")
                                                        .substring(2)).toFixed(2);
            return accumulator + (parsedValue * value.qtd);
        }, 0.0);
        setTotalPurchase(total);
    }

    function decreases(id, size) {
        const item = cartProducts.filter(product => {
            if(product.code_color === id &&
                product.size === size) {
                product.qtd -= 1;
                setCartProductsAmount(productsAmount - 1);
                return product;
            }
            return product
        });

        setCartProducts(item, Number(productsAmount)-1);
        calculateTotalPurchase();
    }

    function increases(id, size) {
        const item = cartProducts.filter(product => {
            if(product.code_color === id &&
                product.size === size) {
                product.qtd += 1;
                setCartProductsAmount(productsAmount + 1);
                return product;
            }
            return product;
        });

        setCartProducts(item, Number(productsAmount)+1);
        calculateTotalPurchase();
    }

    function removeItem(id, size) {
        let amount;
        const items = cartProducts.filter(product => {
            if(!((product.code_color === id) && (product.size === size))) {
                return product;
            }
            amount = productsAmount - product.qtd;
            setCartProductsAmount(productsAmount - product.qtd);
            return null;
        });

        setCartProducts(items, amount);
        calculateTotalPurchase(items);
    }

    return (
        <div className="cart">
            <header className="cart__header">
                <div className="cart__items">
                    <div className="cart__close" onClick={hideCart}>
                        <FontAwesomeIcon icon={ faArrowLeft }/>
                    </div>
                <p className="cart__title">Sacola ({productsAmount})</p>
                </div>
            </header>
            <main className="cart__list">
                {
                    productsAmount > 0 ? (
                    cartProducts.map(cartProduct => (
                        <div className="cart__item item" key={cartProduct.sku}>

                            {cartProduct.image ? (
                                <img src={cartProduct.image} alt="" className="item__image"/>
                            ) : (
                                <img src={imageNotFound} alt="" className="item__image"/>
                            )}
 
                            <Link 
                                to={{pathname: "/product/"+(cartProduct.name.toLowerCase().replace(RegExp(" ", "gi"), "-")),
                                    state: {
                                        id: cartProduct.code_color
                                }}}
                                className="item__title"
                                onClick={hideCart}>{cartProduct.name}</Link>
                            <p className="item__size">Size: {cartProduct.size}</p>
                            <p className="item__price">{cartProduct.actual_price}</p>
                            <p className="item__installments">{cartProduct.installments}</p>
                            <p className="item__remove" onClick={() => removeItem(cartProduct.code_color, cartProduct.size)}>Remover Item</p>

                            <div className="item__info">
                                <button disabled={cartProduct.qtd === 1} className="item__decreases" onClick={() => decreases(cartProduct.code_color, cartProduct.size)}>-</button>
                                <p className="item__amount">{cartProduct.qtd}</p>
                                <button className="item__increases" onClick={() => increases(cartProduct.code_color, cartProduct.size)}>+</button>
                            </div>
                        </div>
                        ))
                    ) : (
                        <div className="cart__item--empty">Sua sacola está vazia :\</div>
                    )
                }
            </main>
            <footer className="cart__price">
                Subtotal: R${totalPurchase.toFixed(2)}
            </footer>
        </div>
    );
}

const mapStateToProps = state => ({
  cartProducts: state.cartProducts,
  productsAmount: state.productsAmount,
  totalPurchase: state.totalPurchase
});

export default connect(mapStateToProps, actionCreator)(Cart);