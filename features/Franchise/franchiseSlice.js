import {createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import FranchiseService from "./franchiseService";

export const registerFranchise = createAsyncThunk('franchise/register',async(data,thunkApi)=>{
    try{
        return await FranchiseService.Register(data)
    }catch(err){
        return thunkApi.rejectWithValue(err)
    }
})


const initialState = {
    franchise:'',
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const resetState=createAction('Reset_all')


export const FranchiseSlice = createSlice({
    name:"franchise",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(registerFranchise.pending,(state)=>{
            state.isLoading = true
        })
        .addCase(registerFranchise.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.franchise = action.payload
        })
        .addCase(registerFranchise.rejected,(state,action)=>{
            state.isLoading = false
            state.isError=true
            state.isSuccess = false
            state.franchise = null
        })

    }
})


export default FranchiseSlice.reducer