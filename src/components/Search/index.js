import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './style.css';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import api from '../../services/api';

export default function Search() {
    const [products, setProducts] = useState([]);
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getItems() {
            const response = await api.get();
            setItems(response.data.products);
        }
        getItems();
    }, []);

    function hideSearch() {
        document.querySelector(".search").classList.remove("search--visible");
        document.querySelector("body").classList.remove("app--scroll-lock");
    }

    function getValue(value) {
        const products = [];
        if(value) {
            const regex = new RegExp(`^${value}`, "gi");
            for(let item of items) {
                if(item.name.search(regex) !== -1) {
                    products.push(item)
                }
            }
        }
        setProducts(products);
    }

    return (
        <div className="search">
            <header className="search__header">
                <div className="search__items">
                    <div className="search__close" onClick={hideSearch}>
                        <FontAwesomeIcon icon={ faArrowLeft }/>
                    </div>
                    <p className="search__title">Buscar Produtos</p>
                </div>
            </header>
            <main className="search__list">
                <div className="searchBox">
                    <input type="text" onChange={e => getValue(e.target.value)}/>
                </div>
                <div className="search__count">
                    {products.length} Itens
                </div>

                { products.map(product => (
                <div key={product.code_color} className="search__item">
                    <img src={product.image} alt={product.name} className="search__image"/>
                    <Link 
                        to={"/product/"+product.code_color} 
                        onClick={hideSearch} className="search__title">
                        {product.name}
                    </Link>
                    <p className="search__price">{product.actual_price}</p>
                    <p className="search__installments">{product.installments}</p>
                </div>
                ))
                }

            </main>
        </div>
    );
}