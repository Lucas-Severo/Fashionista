import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.css';

import notFoundImage from '../../assets/notfound.png';

import Header from '../../components/Header';
import Cart from '../../components/Cart';
import Search from '../../components/Search';

function Home({products, quantity, isLoading}) {
    return (

        <div className="home">
            <Header />
            <Search />
            <Cart />
            {isLoading ? 
                <div className="loading">
                    <div className="loading__bar"></div>
                </div>: (
            <main className="home__items clothes">
                <p className="clothes__amount">{quantity} Itens</p>
                {
                    products.map(product => (
                        <div key={product.code_color} className="clothes__item">
                        
                        {product.on_sale 
                            ? (
                            <>
                                <Link to={"/product/"+product.code_color}>
                                <div className="clothes__image-container">
                                    { product.image 
                                        ? <img src={product.image} className="clothes__image" alt={product.name}/>
                                        : <img src={notFoundImage} className="clothes__image" alt={product.name}/>
                                    }
                                    <div className="clothes__off">{product.discount_percentage}</div>
                                </div>
                                </Link>

                                <Link className="clothes__title" to={"/product/"+product.code_color}>{product.name}</Link>

                                <div className="clothes__prices">
                                    <p className="clothes__price--regular">{product.regular_price}</p>
                                    <p className="clothes__price">{product.actual_price}</p>
                                </div>
                            </>
                        ) : (
                            <>
                            <Link to={"/product/"+product.code_color}>
                            <div className="clothes__image-container">
                                { product.image 
                                    ? <img src={product.image} className="clothes__image" alt={product.name}/>
                                    : <img src={notFoundImage} className="clothes__image" alt={product.name}/>
                                }
                            </div>
                            </Link>

                            <Link className="clothes__title" to={"/product/"+product.code_color}>{product.name}</Link>

                            <p className="clothes__price">{product.actual_price}</p>
                            </>
                        )}
                        
                        </div>
                    ))
                }

            </main>
            )}
        </div>
    );
}

const mapStateToProps = (state) => ({
  products: state.products,
  quantity: state.products.length,
  isLoading: state.isLoading
});

export default connect(mapStateToProps)(Home);