import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: []
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.product = action.payload;
        },
        updateProduct: (state, action) => {
            const { index, updatedProduct } = action.payload;
            state.product[index] = updatedProduct;
        },
        removeProduct: (state, action) => {
            const { _id } = action.payload;
            state.product = state.product.filter((product) => product._id !== _id);
        },
    },
});

export const { setCart, updateProduct, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;