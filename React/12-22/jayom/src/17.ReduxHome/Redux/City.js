import { createSlice } from "@reduxjs/toolkit";

const citySlice = createSlice({
    name: "City",
    initialState: { City: [] },
    reducers: {
        addCity: (state, action) => {
            state.City.push(action.payload);
        },
        deleteCity: (state, action) => {
            state.City = state.City.filter((_, index) => index !== action.payload)
        },
        updateCity: (state, action) => {
            const { index, newName } = action.payload;
            state.City[index] = newName;
        },
    }
});


export default citySlice.reducer;
export const { addCity, deleteCity, updateCity } = citySlice.actions;