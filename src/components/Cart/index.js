import React from 'react';

import './style.css';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Cart() {
    function hideCart() {
        document.querySelector(".cart").classList.toggle("cart--visible");
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
            <main className="cart__content">

            </main>
        </div>
    );
}