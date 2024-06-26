import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    product:[]
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
        state.product = action.payload;
        },
    },
});


export const { setCart } = cartSlice.actions;

export default cartSlice.reducer;