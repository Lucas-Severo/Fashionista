let defaultState = {
    products: []
}

function reducer(state = defaultState, action) {
    if(action.type === "SET_PRODUCTS") {
        return {
            ...state,
            products: action.products
        }
    } else {
        return {
            ...state
        }
    }
}

export default reducer;