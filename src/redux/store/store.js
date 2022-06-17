import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import reducers from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';


const preloadedState = {};
export const store = configureStore({
    middleware: [thunk],
    reducer: reducers
    // preloadedState
})