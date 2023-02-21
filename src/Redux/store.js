import { configureStore } from "@reduxjs/toolkit";
import productreducer from './productSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';



export const store = configureStore({
    reducer:{
        productreducer:productreducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
});