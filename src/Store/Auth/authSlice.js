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
    login: (state, { payload }) => {
      state.status = "auth";
      state.uid = payload?.uid || "";
      state.email = payload?.email || "";
      state.displayName = payload?.displayName || "";
      state.photoURL = payload?.photoURL || "";
      state.errorMessage = null;
    },
    logout: (state, { payload }) => {
      console.log(payload)
      state.status = "not-auth";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload?.errorMessage || null;
    },
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
