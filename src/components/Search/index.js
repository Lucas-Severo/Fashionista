import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actionCreator from '../../redux/actions';

import './style.css';

import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import imageNotFound from '../../assets/notfound.png';

function Search({ products, items, setSearchItems}) {

    function hideSearch() {
        document.querySelector(".search").classList.remove("search--visible");
        document.querySelector(".app").classList.remove("app--scroll-lock");
    }

    function getValue(value) {
        const items = [];
        if(value) {
            const regex = new RegExp(`^${value}`, "gi");
            for(let product of products) {
                if(product.name.search(regex) !== -1) {
                    items.push(product)
                }
            }
        }
        setSearchItems(items);
    }

    return (
        <div className="search">
            <header className="search__header">
                <div className="search__items">
                    <div className="search__close" onClick={hideSearch}>
                        <FontAwesomeIcon icon={ faArrowLeft }/>
                    </div>
                    <p className="search__header--title">Buscar Produtos</p>
                </div>
            </header>
            <main className="search__list">
                <div className="searchBox">
                    <input type="text" onChange={e => getValue(e.target.value)}/>
                </div>

                { items.length > 0 ? (
                    <>
                    <div className="search__count">
                        {items.length} Itens
                    </div>
                
                    { items.map(product => (
                    <div key={product.code_color} className="search__item">

                        { product.image ? (
                            <img src={product.image} alt={product.name} className="search__image"/>
                        ) : (
                            <img src={imageNotFound} alt={product.name} className="search__image"/>
                        )}
                        <Link 
                            to={{pathname: "/product/"+(product.name.toLowerCase().replace(RegExp(" ", "gi"), "-")),
                                state: {
                                    id: product.code_color
                            }}}
                            onClick={hideSearch} className="search__title">
                            {product.name}
                        </Link>
                        <p className="search__price">{product.actual_price}</p>
                        <p className="search__installments">{product.installments}</p>
                    </div>
                    ))}
                    </>
                ) : (
                    <div className="no_items">Nenhum item encontrado :\</div>
                )}

            </main>
        </div>
    );
}

const mapStateToProps = (state)  => ({
    products: state.products,
    items: state.items,
});


export default connect(mapStateToProps, actionCreator)(Search);