import React from 'react';

import './App.css';
import Routes from './routes';

import store from './redux/store';

import { getProducts } from './redux/actions';

// get the products
getProducts()(store.dispatch);

function App() {
  return (
    <Routes store={store}/>
  );
}

export default App;
