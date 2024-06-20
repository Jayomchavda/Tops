import { configureStore } from "@reduxjs/toolkit";
import newCountSlice from "./newCountSlice";
import citySlice from "./City"

export const store = configureStore({
    reducer: {
        newCountSlice,
        citySlice
    }
})