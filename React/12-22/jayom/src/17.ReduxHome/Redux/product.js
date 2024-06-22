import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProduct = createAsyncThunk("fetchProduct", () => {
    return axios.get('https://fakestoreapi.com/products').then((responce) => {
        return responce.data;
    })
})

let newProduct = createSlice({
    name: "product",
    initialState: { product: [] },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            // console.log("action", action)
            state.product = action.payload;
        })
    }
})

export default newProduct.reducer;