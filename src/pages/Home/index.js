import React, { useState, useEffect } from 'react';

import './style.css';

import Header from '../../components/Header';
import Cart from '../../components/Cart';

import api from '../../services/api';

export default function Home() {
    const [ products, setProducts ] = useState([]);
    const [ quantity, setQuantity ] = useState(0);

    async function getData() {
        const response = await api.get();
        setProducts(response.data.products);
        setQuantity(response.data.products.length);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="home">
            <Header />
            <Cart />
            <main className="home__items clothes">
                <p className="clothes__amount">{quantity} Itens</p>
                {
                    products.map(product => (
                        <div key={product.code_color} className="clothes__item">
                        <img src={product.image} className="clothes__image" alt={product.name}/>
                        <p className="clothes__title">{product.name}</p>
                        <p className="clothes__price">{product.actual_price}</p>
                        </div>
                    ))
                }

            </main>
        </div>
    );
}