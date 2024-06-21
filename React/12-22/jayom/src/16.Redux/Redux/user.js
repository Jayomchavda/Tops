import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: { user: [] },
    reducers: {
        addUser: (state, action) => {
            state.user.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.user = state.user.filter((_, index) => index !== action.payload)
        },
        editUser: (state, action) => {
            const { index, newName } = action.payload;
            if (index >= 0 && index < state.user.length) {
                state.user[index] = newName;
            }
        }


    },
});

export default userSlice.reducer;
export const { addUser, deleteUser, editUser } = userSlice.actions;
