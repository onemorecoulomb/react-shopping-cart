import { FETCH_PRODUCTS , FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE} from "../types";

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
//filter except 1. all products 2. size to filter then return dispatch
export const filterProducts = (products,size) => (dispatch) => {
    // console.log("555");
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: size === ""
                ? products
                : products.filter((x) => x.availableSizes.indexOf(size) >= 0)
        }
    });
}

export const sortProducts = (filterProducts, sort) => (dispatch) => {
    const sortedProducts = filterProducts.slice();
    if(sort === "Latest"){
        sortedProducts.sort((a, b) => (a._id > b._id? 1 : -1))
    }else{
        sortedProducts.sort((a, b) => (
            sort === "Lowest"
                ? a.price > b.price
                    ? 1 
                    : -1
                : a.price > b.price
                    ? -1 
                    : 1
        ))
    }
    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts
        }
    });
}