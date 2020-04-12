import React from 'react';

import './style.css';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import image3 from '../../pages/Home/assets/image3.png';

export default function Cart() {
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
                <div className="cart__item item">
                    <img src={image3} alt="" className="item__image"/>
                    <p className="item__title">Blazzer Cinza</p>
                    <p className="item__size">Tam: P</p>
                    <p className="item__price">R$48,50</p>
                    <p className="item__installments">2x de R$24,50</p>
                    <p className="item__remove">Remover Item</p>

                    <div className="item__info">
                        <button className="item__decreases">-</button>
                        <p className="item__amount">0</p>
                        <button className="item__increases">+</button>
                    </div>
                </div>
                <div className="cart__item item">
                    <img src={image3} alt="" className="item__image"/>
                    <p className="item__title">Blazzer Cinza</p>
                    <p className="item__size">Tam: P</p>
                    <p className="item__price">R$48,50</p>
                    <p className="item__installments">2x de R$24,50</p>
                    <p className="item__remove">Remover Item</p>

                    <div className="item__info">
                        <button className="item__decreases">-</button>
                        <p className="item__amount">0</p>
                        <button className="item__increases">+</button>
                    </div>
                </div>
                <div className="cart__item item">
                    <img src={image3} alt="" className="item__image"/>
                    <p className="item__title">Blazzer Cinza</p>
                    <p className="item__size">Tam: P</p>
                    <p className="item__price">R$48,50</p>
                    <p className="item__installments">2x de R$24,50</p>
                    <p className="item__remove">Remover Item</p>

                    <div className="item__info">
                        <button className="item__decreases">-</button>
                        <p className="item__amount">0</p>
                        <button className="item__increases">+</button>
                    </div>
                </div>
                <div className="cart__item item">
                    <img src={image3} alt="" className="item__image"/>
                    <p className="item__title">Blazzer Cinza</p>
                    <p className="item__size">Tam: P</p>
                    <p className="item__price">R$48,50</p>
                    <p className="item__installments">2x de R$24,50</p>
                    <p className="item__remove">Remover Item</p>

                    <div className="item__info">
                        <button className="item__decreases">-</button>
                        <p className="item__amount">0</p>
                        <button className="item__increases">+</button>
                    </div>
                </div>
            </main>
        </div>
    );
}