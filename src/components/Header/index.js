import React from 'react';
import { Link } from 'react-router-dom';
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
                <Link className="header__logo" to="/">Fashionista</Link>
                <div className="header__buttons">
                    <div className="header__search">
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                    <div className="header__cart">
                        <FontAwesomeIcon icon={faCartPlus} onClick={showCart}/>
                    </div>
                </div>
            </div>
        </header>
    );
}