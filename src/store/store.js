import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import wishListReducer from './WishList';
import newReducer from './newSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    new: newReducer,
    wishList: wishListReducer,
  },
});

export default store;
