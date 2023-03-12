import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const defaultState = {
    user:[]
}

export const findregistereduserbyemail = createAsyncThunk("finduserbyemail",async (email)=>
    await axios.get(`http://localhost:5000/olx/findregistereduserbyemail/${email}`)
)

export const sendotpmailtoregistereduser = createAsyncThunk("sendotpmailtoregistereduser",async (maildetails)=>
   await axios.post("http://localhost:5000/olx/sendotpmailtoregistereduser",maildetails)
)

const UserSlice = createSlice({
    name:"userSlice",
    initialState:defaultState,
    reducers:{
        removeUser:(state,action)=>{
            state.user=[];
        }

    },
    extraReducers:(builder)=>{
       builder.addCase(findregistereduserbyemail.fulfilled,(state,action)=>
       {
           state.user = action.payload;
           console.log(state.user);
       })
    }
});

export default UserSlice.reducer;
export const {removeUser} = UserSlice.actions;