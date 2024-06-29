import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
};

export const cartSlice = createSlice({
    name: "CatagoreyCart",
    initialState,
    reducers: {
        setCatahoreyCart: (state, action) => {
            state.product = action.payload;
        },
    },
});

export const { setCatahoreyCart } = cartSlice.actions;

export default cartSlice.reducer;