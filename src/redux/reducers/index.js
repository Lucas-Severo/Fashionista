let defaultState = {
    cartProducts: [],
    products: [],
    id: null,
    size: null,
    items: [],
    productsAmount: 0
}

function reducer(state = defaultState, action) {
    switch(action.type) {
        case "SET_PRODUCTS": 
            return {
                ...state,
                products: action.products
            }
        case "UPDATE_ID":
            return {
                ...state,
                id: action.id
            }
        case "SET_SIZE":
            return {
                ...state,
                size: action.size
            }
        case "SET_SEARCH_ITEMS":
            return {
                ...state,
                items: action.items
            }
        case "SET_CART_PRODUCTS":
            return {
                ...state,
                cartProducts: action.cartProducts
            }
        case "SET_CART_PRODUCTS_AMOUNT":
            return {
                ...state,
                productsAmount: action.productsAmount
            }
        default:
            return state
    }
}

export default reducer;