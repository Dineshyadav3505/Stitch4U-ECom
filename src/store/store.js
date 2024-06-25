import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import wishListReducer from './WishList';

const store = configureStore({
  reducer: {
    user: userReducer,
    // cart: cartReducer,
    wishList: wishListReducer,
    // order: orderReducer,
    // product: productReducer,
    // category: categoryReducer,
  },
});

export default store;
