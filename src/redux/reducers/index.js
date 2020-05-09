let products2 = JSON.parse(localStorage.getItem('products'));
let amount = localStorage.getItem('products_amount');

if(!products2) {
    products2 = [];
}

if(!amount)
    amount = 0;

let defaultState = {
    cartProducts: products2,
    products: [],
    id: null,
    size: null,
    items: [],
    productsAmount: Number(amount),
    totalPurchase: 0.0,
    isLoading: false
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
            localStorage.setItem('products', [JSON.stringify(action.cartProducts)]);
            localStorage.setItem('products_amount', action.productsAmount);
            return {
                ...state,
                cartProducts: action.cartProducts
            }
        case "SET_CART_PRODUCTS_AMOUNT":
            return {
                ...state,
                productsAmount: action.productsAmount
            }
        case "SET_TOTAL_PURCHASE":
            return {
                ...state,
                totalPurchase: action.totalPurchase
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state
    }
}

export default reducer;