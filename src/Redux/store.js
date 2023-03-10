import { configureStore } from "@reduxjs/toolkit";
import productreducer from './productSlice';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import  userreducer  from "./userSlice";



export const store = configureStore({
    reducer:{
        productreducer:productreducer,
        userreducer:userreducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}),
});