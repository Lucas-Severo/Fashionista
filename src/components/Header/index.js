import React from 'react';
import './style.css';

import { faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {

    function showCart() {
        document.querySelector(".cart").classList.toggle("cart--visible");
        document.querySelector(".home").classList.add("home--scroll-lock");
    }

    return (
        <header className="header">
            <div className="header__items">
                <p className="header__logo">Fashionista</p>
                <div className="header__buttons">
                    <div className="header__search">
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                    <div className="header__cart" onClick={showCart}>
                        <FontAwesomeIcon icon={faCartPlus}/>
                    </div>
                </div>
            </div>
        </header>
    );
}