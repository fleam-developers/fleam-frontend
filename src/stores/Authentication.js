import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "./constants";
import axios from "axios";

const namespace = "auth";

export const fetchAllUsers = createAsyncThunk(`${namespace}/fetchAllUsers`, async () => {
  const { data } = await axios.get(`${API_URL}/users`);
  return data;
});

export const fetchSelectedUser = createAsyncThunk(`${namespace}/fetchSelectedUser`, async (username) => {
  const { data } = await axios.get(`${API_URL}/users/${username}`);
  return data;
});

export const register = createAsyncThunk(`${namespace}/register`, async (userData) => {
  const { data } = await axios.post(`${API_URL}/users`, userData);
  //   console.log(data)
  return data;
});
export const updateProfile = createAsyncThunk(`${namespace}/updateProfile`, async (userData) => {
  const { data } = await axios.put(`${API_URL}/users`, userData);
  return data;
});

export const login = createAsyncThunk(`${namespace}/login`, async (userData) => {
  //const { data } = await axios.post(`${API_URL}/login`, userData);
  //   console.log(data)
  // userTypes: user, creator, admin
  return { token: "Bearer AbCdEf123456", username: userData.username, userType: "user" };
});

export const beCreator = createAsyncThunk(`${namespace}/beCreator`, async () => {
  //const { data } = await axios.post(`${API_URL}/login`, userData);
  //   console.log(data)
  // userTypes: user, creator, admin
});

const AuthenticationSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    userList: null,
    selectedUser: null,
    loggedUser: null,
    isLogged: false,
    errorMessage: null,
  },
  reducers: {
    getLoggedUser(state) {
      const data = {
        username: localStorage.getItem("username"),
        userType: localStorage.getItem("userType"),
        token: localStorage.getItem("token"),
      };
      state.loggedUser = data;
      state.isLogged = localStorage.getItem("token") ? true : false;
    },
    logout(state) {
      localStorage.clear();
      state.loggedUser = null;
      state.isLogged = false;
    },
  },
  extraReducers: {
    [fetchAllUsers.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchAllUsers.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.userList = payload;
    },
    [fetchAllUsers.rejected](state, { error }) {
      state.loading = HTTP_STATUS.REJECTED;
      state.errorMessage = error.message;
    },
    [fetchSelectedUser.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.selectedUser = payload;
    },
    [login.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.loggedUser = payload;
      state.isLogged = true;
    },
    [beCreator.fulfilled](state) {
      const data = {
        username: localStorage.getItem("username"),
        userType: "creator",
        token: localStorage.getItem("token"),
      };
      console.log(data)
      state.loading = HTTP_STATUS.FULFILLED;
      state.loggedUser = data;
    },
  },
});

export const { getLoggedUser, logout } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
