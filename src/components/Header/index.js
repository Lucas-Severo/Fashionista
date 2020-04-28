import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './style.css';

import { faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header({productsAmount}) {

    function showCart() {
        document.querySelector(".cart").classList.toggle("cart--visible");
        document.querySelector(".app").classList.add("app--scroll-lock");
    }

    function showSearch() {
        document.querySelector(".search").classList.toggle("search--visible");
        document.querySelector(".app").classList.add("app--scroll-lock");
    }

    return (
        <header className="header">
            <div className="header__items">
                <Link className="header__logo" to="/">Fashionista</Link>
                <div className="header__buttons">
                    <div className="header__search">
                        <FontAwesomeIcon icon={faSearch} onClick={showSearch}/>
                    </div>
                    <div className="header__cart">
                        <FontAwesomeIcon icon={faCartPlus} onClick={showCart}/>
                        <div className="header__amount" onClick={showCart}>{productsAmount}</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = state => ({
  productsAmount: state.productsAmount
});

export default connect(mapStateToProps)(Header)