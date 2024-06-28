import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newArrivedProducts: {},
    bestSellerProducts: {},
    swiperImg: {},
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setNewArrivedProducts: (state, action) => {
            state.newArrivedProducts = action.payload;
        },
        setBestSellerProducts: (state, action) => {
            state.bestSellerProducts = action.payload;
        },
        setSwiperImg: (state, action) => {
            state.swiperImg = action.payload;
        },
    },
});

export const { setNewArrivedProducts, setBestSellerProducts, setSwiperImg } = productSlice.actions;

export default productSlice.reducer;