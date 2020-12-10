import { FETCH_PRODUCTS } from "../types";

// export function that accept no param and return function that accept dispatch
export const fetchProducts = () => async (dispatch) => {
    
    const res = await fetch("http://localhost:5000/api/products");
    //     .then(function(result) {
    //         console.log(result);
    //     });
    // console.log(Promise.resolve(res));
    const data = await res.json();
    console.log(data);
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    });
    
}