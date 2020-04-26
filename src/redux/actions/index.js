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

export function updateId(id) {
    return {
        type: "UPDATE_ID",
        id: id
    }
}

export function setSize(size) {
    return {
        type: "SET_SIZE",
        size: size
    }
}