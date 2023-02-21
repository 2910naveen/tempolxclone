import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from 'axios';

const defaultState = {
    products:[]
};


export const getProductsFromDB = createAsyncThunk("getProductsFromDB",async ()=>{
    return await axios.get("http://localhost:5000/olx/getallcars").then((res)=>res).catch(err=>console.log(err));
}) 




export const postcardetails = createAsyncThunk("postcardetails",async (product)=>{
   console.log("inside postcardetails");
   return await axios.post("http://localhost:5000/olx/postcarproductdetails",product).then((res)=>console.log(res)).catch(err=>console.log(err))
});

const ProductSlice = createSlice({
    name:"productslice",
    initialState:defaultState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getProductsFromDB.fulfilled,(state,action)=>{
            state.products = action.payload.data.data;
        })
    }
});

export default ProductSlice.reducer;