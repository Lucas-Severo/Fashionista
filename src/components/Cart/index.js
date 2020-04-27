import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

import * as actionCreator from '../../redux/actions';

import './style.css';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cart({cartProducts, setCartProducts}) {
    function hideCart() {
        document.querySelector(".cart").classList.remove("cart--visible");
        document.querySelector("body").classList.remove("app--scroll-lock");
    }

    function decreases(id, size) {
        const item = cartProducts.filter(product => {
            if(product.code_color === id &&
                product.size === size) {
                product.qtd -= 1;
                return product;
            }
            return product
        });

        setCartProducts(item);
    }

    function increases(id, size) {
        const item = cartProducts.filter(product => {
            if(product.code_color === id &&
                product.size === size) {
                product.qtd += 1;
                return product;
            }
            return product;
        });

        setCartProducts(item);
    }

    function removeItem(id, size) {
        const items = cartProducts.filter(product => {
            if(!((product.code_color === id) && (product.size === size))) {
                return product;
            }
            return null;
        });

        setCartProducts(items);
    }

    return (
        <div className="cart">
            <header className="cart__header">
                <div className="cart__items">
                    <div className="cart__close" onClick={hideCart}>
                        <FontAwesomeIcon icon={ faArrowLeft }/>
                    </div>
                    <p className="cart__title">Sacola</p>
                </div>
            </header>
            <main className="cart__list">
                {
                    cartProducts.map(cartProduct => (
                    <div className="cart__item item" key={cartProduct.code_color}>
                    <img src={cartProduct.image} alt="" className="item__image"/>
                        <Link 
                            to={`/product/${cartProduct.code_color}`} 
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
                }
            </main>
            <footer className="cart__price">
                300reais
            </footer>
        </div>
    );
}

const mapStateToProps = state => ({
  cartProducts: state.cartProducts
});

export default connect(mapStateToProps, actionCreator)(Cart);