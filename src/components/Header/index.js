import React from 'react';
import './style.css';

import { faSearch, faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Header() {
    return (
        <header className="header">
            <div className="header__items">
                <p className="header__logo">Fashionista</p>
                <div className="header__buttons">
                    <div className="header__search">
                        <FontAwesomeIcon icon={faSearch}/>
                    </div>
                    <div className="header__cart">
                        <FontAwesomeIcon icon={faCartPlus}/>
                    </div>
                </div>
            </div>
        </header>
    );
}