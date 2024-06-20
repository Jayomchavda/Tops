import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { user: [] },
    reducers: {
        addUser: (state, action) => {
            state.user.push(action.payload);
        },
        deleteUser: (state, action) => {

            // state.user.splice(action.payload);
            state.user = state.user.filter((_, index) => index !== action.payload)
        }
    },
});

export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;
