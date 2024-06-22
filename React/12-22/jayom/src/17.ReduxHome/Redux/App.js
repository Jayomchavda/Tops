import { configureStore } from "@reduxjs/toolkit";
import newCountSlice from "./newCountSlice";
import citySlice from "./City"
import newProduct from "./product"

export const store = configureStore({
    reducer: {
        newCountSlice,
        citySlice,
        newProduct
    }
})