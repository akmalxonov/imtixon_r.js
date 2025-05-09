import { configureStore } from "@reduxjs/toolkit";
import cardSlice from './shopSlice';
import likeSlice from './likeSlice';  


export const store = configureStore({
    reducer: {
        shop: cardSlice,
        like: likeSlice,
    }
})