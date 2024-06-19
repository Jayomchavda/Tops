import { createSlice } from "@reduxjs/toolkit";

let countSlice = createSlice({
    name: "count",
    initialState: { count: 50 },
    reducers: {
        incrementCount: (state, action) => {
            console.log("-=-=-=->");
            state.count++;
        },

        incByValue: (state, action) => {
            state.count = state.count + +action.payload;
        }
    },

    extraReducers: (builder) => {
        builder.addCase("user/adduser", (state, action) => {
            state.count++;
        })
    }
});

export default countSlice.reducer;
export const { incrementCount, incByValue } = countSlice.actions;