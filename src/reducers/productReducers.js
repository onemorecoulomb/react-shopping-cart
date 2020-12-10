import { FETCH_PRODUCTS } from "../types"

// export function that accept 1. current state that set default to empty 2. is action
export const productsReducers = ( state ={}, action) => {

    switch (action.type){
        case FETCH_PRODUCTS:
            return { items  : action.payload }
        default:
            return state;
    }
}