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
        removeProduct: (state, action) => {
            const { _id } = action.payload;
            state.product = state.product.filter((product) => product._id !== _id);
        },
    },
});

export const { setWishList, removeProduct} = wishListSlice.actions;

export default wishListSlice.reducer;
