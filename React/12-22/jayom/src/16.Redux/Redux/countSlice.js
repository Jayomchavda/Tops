import { createSlice } from "@reduxjs/toolkit";

let countSlice = createSlice({
    name: "count",
    initialState: { count: 50 },
    reducers: {
        incrementCount: (state, action) => {
            console.log("-=-=-=->");
            state.count++;
        }
    }
});

export default countSlice.reducer;
export const { incrementCount } = countSlice.actions;