import api from '../../services/api';

export function getProducts() {
    return (dispatch) => {
        dispatch(setLoading(true));
            return api.get()
            .then(response => {
                dispatch(setProducts(response.data))
                dispatch(setLoading(false));
            });
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

export function setSearchItems(items) {
    return {
        type: "SET_SEARCH_ITEMS",
        items: items
    }
}

export function setCartProducts(cartProducts, amount) {
    return {
        type: "SET_CART_PRODUCTS",
        cartProducts: cartProducts,
        productsAmount: amount
    }
}

export function setCartProductsAmount(amount) {
    return {
        type: "SET_CART_PRODUCTS_AMOUNT",
        productsAmount: amount
    }
}

export function setTotalPurchase(total) {
    return {
        type: "SET_TOTAL_PURCHASE",
        totalPurchase: total
    }
}

export function setLoading(isLoading) {
    return {
        type: "SET_LOADING",
        isLoading: isLoading
    }
}