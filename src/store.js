import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { productsReducers } from './reducers/productReducers';

const initialState = {};

//this line about to comunicate with Chrome Reduc devtools extenseion if we have
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//function that accept 1. reducer that we use combineReducers() to combine all reducer we have that we have one
                    // 2.is initialstate
                    // 3.is middleware that we use conpose to combine all middleware we use, that we use thunk to make action such dispatch asynchonize
const store =createStore(combineReducers({
    products: productsReducers,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;