import api from '../../services/api';

export function getProducts() {
    return (dispatch) => {
        return api.get()
        .then(response => dispatch(setProducts(response.data.products)));
    }
}

export function setProducts(products) {
    return {
        type: "SET_PRODUCTS",
        products: products
    }
}