import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    userAdd: [],
    grandTotal: 0,
};

export const orderSlice = createSlice({
    name: "order",
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.product = action.payload;
        },
        setProductAdd: (state, action) => {
            state.userAdd = action.payload;
        },
        setGrandTotal: (state, action) => {
            state.grandTotal = action.payload;
        },
    },
});

export const { setProduct, setProductAdd, setGrandTotal} = orderSlice.actions;

export default orderSlice.reducer;