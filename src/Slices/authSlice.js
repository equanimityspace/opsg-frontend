import { createSlice } from "@reduxjs/toolkit";
import api from "../App/api";
import { storeToken } from "../utils/tokenService";

// register
const registerSlice = createSlice({
  name: "register",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken);
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken);
  },
});

const getAllUsersSlice = createSlice({
  name: "getAllUsers",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getAllUsers.matchFulfilled);
  },
});

const updateUserProfileSlice = createSlice({
  name: "updateUserProfile",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.updateUserProfile.matchFulfilled);
  },
});

export const registerReducer = registerSlice.reducer;
export const loginReducer = loginSlice.reducer;
export const getAllUsersReducer = getAllUsersSlice.reducer;
export const updateUserProfile = updateUserProfileSlice.reducer;
