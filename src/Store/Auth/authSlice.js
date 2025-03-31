import { createSlice } from "@reduxjs/toolkit";

//Status
//not-auth
//auth

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "not-auth",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  reducers: {
    login: (state, action) => {},
    logout: (state, payload) => {},
    checkingCredentials: (state) => {
        state.status = "checking"
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;