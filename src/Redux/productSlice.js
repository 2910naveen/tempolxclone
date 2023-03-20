import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";
import axios from 'axios';

const defaultState = {
    products:[],
    bikes:[],
    mobiles:[]
};

export const sendinterestedmailtoseller = createAsyncThunk("sendinterestedmailtoseller",async(mailerdetails)=>
  {
    console.log(mailerdetails);
    await axios.post("http://localhost:5000/olx/sendinterestedmailtoseller",mailerdetails)
  }
);

export const getProductsFromDB = createAsyncThunk("getProductsFromDB",async ()=>{
    return await axios.get("http://localhost:5000/olx/getallcars").then((res)=>res).catch(err=>console.log(err));
}) 

export const getmotorcycledetails  = createAsyncThunk("getmotorcyclesdetails",async ()=>
    await axios.get("http://localhost:5000/olx/getmotorcycledetails").then((res)=>res).catch((err)=>err)
  )

export const getmobilephonesdetails = createAsyncThunk("getmobilephonesdetail",async ()=>
   await axios.get("http://localhost:5000/olx/getmobilephonedetails").then((res)=>res).catch((err)=>err)
)

export const postUserRegisterDetails = createAsyncThunk("postuserregisterdetails",async (user)=>{
   await axios.post("http://localhost:5000/olx/postuserregisterdetails",user).then(res=>console.log(res)).catch(err=>console.log(err));
})

export const postmotorcycledetails = createAsyncThunk("postmotorcycledetails",async (product)=>{
    return await axios.post("http://localhost:5000/olx/postmotorcycledetails",product).then(res=>console.log(res)).catch(err=>console.log(err));
})

export const postmobilephonedetails = createAsyncThunk("postmobilephonedetails",async (product)=>
{
  console.log("inside mobilephone details");
  return  await axios.post("http://localhost:5000/olx/postmobilephonedetails",product).then(res=>console.log(res)).catch(err=>console.log(err)) 
}
)
export const postcardetails = createAsyncThunk("postcardetails",async (product)=>{
   console.log("inside postcardetails");
   return await axios.post("http://localhost:5000/olx/postcarproductdetails",product).then((res)=>console.log(res)).catch(err=>console.log(err))
});

export const updatestatusofuser = createAsyncThunk("updatestatusofuser",async (user)=>
  await axios.put("http://localhost:5000/olx/updatestatusofuser",user).then((res)=>console.log(res)).catch((err)=>console.log(err))
);

const ProductSlice = createSlice({
    name:"productslice",
    initialState:defaultState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getProductsFromDB.fulfilled,(state,action)=>{
            state.products = action.payload.data.data;
        });
        builder.addCase(getmotorcycledetails.fulfilled,(state,action)=>{
            state.bikes = action.payload.data.data;
        });
        builder.addCase(getmobilephonesdetails.fulfilled,(state,action)=>{
            state.mobiles = action.payload.data.data;
        })
    }
});

export default ProductSlice.reducer;