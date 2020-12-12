import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE } from "../types"

// export function that accept 1. current state that set default to empty 2. is action
export const productsReducers = ( state ={}, action) => {

    switch (action.type){
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                size: action.payload.size,
                filteredItems: action.payload.items
            }
        case ORDER_PRODUCTS_BY_PRICE:
            return {
                ...state,
                size: action.payload.sort,
                filteredItems: action.payload.items
            }
        case FETCH_PRODUCTS:
            return { items  : action.payload, filteredItems: action.payload }
        default:
            return state;
    }
}