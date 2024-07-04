import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userAddress: []
};

export const userAddressSlice = createSlice({
    name: "userAddress",
    initialState,
    reducers: {
        setUserAddress: (state, action) => {
            state.userAddress = action.payload;
        }
    },
});

export const { setUserAddress } = userAddressSlice.actions;

export default userAddressSlice.reducer;