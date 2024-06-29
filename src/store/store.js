import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import wishListReducer from './WishList';
import newReducer from './newSlice';
import cartReducer from './cartSlice';
import homeReducer from './homeSlice';
import searchReducer from './searchSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    new: newReducer,
    wishList: wishListReducer,
    cart: cartReducer,
    home:homeReducer,
    search: searchReducer,
    
  },
});

export default store;
