import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/productSlice'
import cartSlice from "../features/cartSlice";

export const store = configureStore({
    reducer:{
        products: productsReducer,
        cart:cartSlice
    }
})

