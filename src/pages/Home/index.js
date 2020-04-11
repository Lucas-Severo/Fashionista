import React from 'react';

import './style.css';

import Header from '../../components/Header';
import Cart from '../../components/Cart';

import Cloth01 from './assets/image1.jpg';
import Cloth02 from './assets/image2.jpg';
import Cloth03 from './assets/image3.jpg';
import Cloth04 from './assets/image4.jpg';

export default function Home() {

    return (
        <div className="home">
            <Header />
            <Cart />
            <main className="home__items clothes">
                <p className="clothes__amount">18 Itens</p>
                <div className="clothes__item">
                    <img src={Cloth01} className="clothes__image" alt=""/>
                    <p className="clothes__title">Camisa Branca</p>
                    <p className="clothes__price">R$ 52,20</p>
                </div>

                <div className="clothes__item">
                    <img src={Cloth02} className="clothes__image" alt=""/>
                    <p className="clothes__title">CAMISA MANGA LONGA VERDE</p>
                    <p className="clothes__price">R$ 65,30</p>
                </div>

                <div className="clothes__item">
                    <img src={Cloth03} className="clothes__image" alt=""/>
                    <p className="clothes__title">Camisa Branca</p>
                    <p className="clothes__price">R$ 52,20</p>
                </div>

                <div className="clothes__item">
                    <img src={Cloth04} className="clothes__image" alt=""/>
                    <p className="clothes__title">BLAZZER CINZA</p>
                    <p className="clothes__price">R$ 48,50</p>
                </div>

            </main>
        </div>
    );
}