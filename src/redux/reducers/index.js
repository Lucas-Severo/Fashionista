let defaultState = {
    products: [],
    id: null,
    size: null
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
        default:
            return state
    }
}

export default reducer;