import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product:[]
};

export const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        setWishList: (state, action) => {
            state.product = action.payload;
        },
    },
});

export const { setWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
