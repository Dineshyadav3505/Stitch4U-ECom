import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Products: {},
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.Products = action.payload;
        },
    },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;