import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: null,
  currentUser: null,
  loggedAt: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAccesToken: (state, action) => {
      state.accessToken = action.payload.token;
      state.loggedAt = action.payload.loggedAt;
    },
    clearAccessToken: (state, action) => {
      state.accessToken = initialState.accessToken;
      state.loggedAt = initialState.loggedAt;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    clearCurrentUser: (state, action) => {
      state.currentUser = initialState.currentUser;
    },
  },
});

export const { setAccesToken, clearAccessToken, setCurrentUser, clearCurrentUser } = authSlice.actions;

export default authSlice.reducer;
