import { createSlice } from "@reduxjs/toolkit";

let addCityCount = createSlice({
    name: "newCount",
    initialState: { newCount: 20 },
    reducers: {
        addCount: (state, action) => {
            state.newCount++;
        },
    },
    extraReducers: (builder) => {
        builder.addCase("City/addCity", (state, action) => {
            state.newCount++;
        })
    }
})

export default addCityCount.reducer
export const { addCount } = addCityCount.actions;