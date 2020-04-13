import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import notFoundImage from '../../assets/notfound.png';

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
                        <Link to={"/product/"+product.code_color}>
                            { product.image 
                                ? <img src={product.image} className="clothes__image" alt={product.name}/>
                                : <img src={notFoundImage} className="clothes__image" alt={product.name}/>
                            }
                        </Link>
                        <Link className="clothes__title" to={"/product/"+product.code_color}>{product.name}</Link>
                        <p className="clothes__price">{product.actual_price}</p>
                        </div>
                    ))
                }

            </main>
        </div>
    );
}