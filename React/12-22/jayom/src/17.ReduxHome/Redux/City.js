import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
    name: "City",
    initialState: { City: [] },
    reducers: {
        addCity: (state, action) => {
            state.City.push(action.payload);
        }
    }
})

export default citySlice.reducer;
export const { addCity } = citySlice.actions;