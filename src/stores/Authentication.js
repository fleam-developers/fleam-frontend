import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, API_URL2, HTTP_STATUS } from "./constants";
import axios from "axios";

const namespace = "auth";

export const fetchAllUsers = createAsyncThunk(`${namespace}/fetchAllUsers`, async () => {
  //----------
  const { data } = await axios.get(`${API_URL}/users`);
  return data;
});

export const getAdminStatistics = createAsyncThunk(`${namespace}/getAdminStatistics`, async () => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const { data } = await axios.get(`${API_URL2}/admin/statistics`, config);
  // console.log(data)
  return data;
});

export const fetchSelectedUser = createAsyncThunk(`${namespace}/fetchSelectedUser`, async (userId) => {
  //xxxxxxxxxxxxx
  const { data } = await axios.get(`${API_URL2}/user/?userId=${userId}`);
  return data;
});

export const register = createAsyncThunk(`${namespace}/register`, async (userData) => {
  const { data } = await axios.post(`${API_URL2}/auth/register`, userData);
  return data;
});
export const updateProfile = createAsyncThunk(`${namespace}/updateProfile`, async (userData) => {
  //----------
  const { data } = await axios.put(`${API_URL}/users`, userData);
  return data;
});

export const login = createAsyncThunk(`${namespace}/login`, async (userData) => {
  const { data } = await axios.post(`${API_URL2}/auth/login`, userData);
  localStorage.setItem("token", data.token);
  localStorage.setItem("username", data.user.username);
  localStorage.setItem("userId", data.user.id);
  data.user.creator ? localStorage.setItem("userType", "creator") : localStorage.setItem("userType", "user");

  return { token: data.token, user: data.user };
});

export const beCreator = createAsyncThunk(`${namespace}/beCreator`, async () => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const userData = {
    userId: localStorage.getItem("userId"),
  };
  await axios.post(`${API_URL2}/user/creator`, userData, config);
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
    adminStatistics: null,
  },
  reducers: {
    getLoggedUser(state) {
      const data = {
        username: localStorage.getItem("username"),
        userType: localStorage.getItem("userType"),
        token: localStorage.getItem("token"),
        id: localStorage.getItem("id"),
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
      state.loading = HTTP_STATUS.FULFILLED;
      state.loggedUser = data;
      localStorage.setItem("userType", "creator");
    },
    [getAdminStatistics.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.adminStatistics = payload;
    },
  },
});

export const { getLoggedUser, logout } = AuthenticationSlice.actions;

export default AuthenticationSlice.reducer;
