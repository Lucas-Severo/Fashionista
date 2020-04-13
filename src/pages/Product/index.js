import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import Cart from '../../components/Cart';

import api from '../../services/api';

export default function Product(props) {
    const [ products, setProducts ] = useState([]);
    const [ id, setId ] = useState(null);

    useEffect(() => {
        async function getData() {
            const response = await api.get();
            setProducts(response.data.products);
            setId(props.match.params.id);
        }
        getData();
    }, [props.match.params.id]);

    return (
        <div className="product">
            <Header />
            <Cart />
            <h1>Product Page</h1>
            {products.filter(product => product.code_color === id).map(product => (
                <h2 key={product.code_color}>
                    {product.name}
                </h2>
            ))}
        </div>
    );
}