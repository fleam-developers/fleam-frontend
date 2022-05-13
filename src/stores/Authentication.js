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
  const {data} = await axios.post(`${API_URL}/users/`, userData);
//   console.log(data)
  return data;
});

const AuthenticationSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    userList: null,
    selectedUser: null,
    errorMessage: null,
  },
  reducers: {},
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
  },
});

export default AuthenticationSlice.reducer;
