import React from 'react';
import { connect } from 'react-redux';

import './style.css';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Cart({cartProducts}) {
    function hideCart() {
        document.querySelector(".cart").classList.remove("cart--visible");
        document.querySelector("body").classList.remove("app--scroll-lock");
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
                        <p className="item__title">{cartProduct.name}</p>
                        <p className="item__size">Size: {cartProduct.size}</p>
                        <p className="item__price">{cartProduct.actual_price}</p>
                        <p className="item__installments">{cartProduct.installments}</p>
                        <p className="item__remove">Remover Item</p>

                        <div className="item__info">
                            <button className="item__decreases">-</button>
                            <p className="item__amount">{cartProduct.qtd}</p>
                            <button className="item__increases">+</button>
                        </div>
                    </div>
                    ))
                }
            </main>
        </div>
    );
}

const mapStateToProps = state => ({
  cartProducts: state.cartProducts
});

export default connect(mapStateToProps)(Cart);