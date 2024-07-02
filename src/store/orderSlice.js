import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    quantity: 0,
    userAdd: [],
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
        setQuantity: (state, action) => {
            state.quantity = action.payload;
        },
        setProductAdd: (state, action) => {
            state.userAdd = action.payload;
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

export const { setProduct, setProductAdd, updateProduct, removeProduct , setQuantity} = orderSlice.actions;

export default orderSlice.reducer;