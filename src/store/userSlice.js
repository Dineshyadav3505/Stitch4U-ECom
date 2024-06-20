import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: {},
    user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    setUserLogoutDetails: (state) => {
      state.accessToken = {};
      state.user = {};
    },
  },
});

export const { setUserLoginDetails, setUserLogoutDetails } = userSlice.actions;

export default userSlice.reducer;
