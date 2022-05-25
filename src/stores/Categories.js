import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, API_URL2, HTTP_STATUS } from "./constants";
import axios from "axios";

const namespace = "categories";

export const fetchAllCategories = createAsyncThunk(`${namespace}/fetchAllCategories`, async () => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const userId = localStorage.getItem("userId");
  const { data } = await axios.get(`${API_URL2}/catalog?userId=${userId}`, config);
  return data;
});

export const fetchSearchedCategories = createAsyncThunk(`${namespace}/fetchSearchedCategories`, async (obj) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const { data } = await axios.get(`${API_URL2}/movie/search?name=${obj}`, config);
  return data;
});

export const fetchSelectedCategory = createAsyncThunk(`${namespace}/fetchSelectedCategory`, async (categoryId) => {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
  const userId = localStorage.getItem("userId");
  const { data } = await axios.get(`${API_URL2}/catalog/${categoryId}?userId=${userId}`, config);
  return data;
});

const CategoriesSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    categories: null,
    selectedCategory: null,
    searchedMovies: null,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllCategories.pending](state) {
      state.loading = HTTP_STATUS.PENDING;
    },
    [fetchAllCategories.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.categories = payload;
    },
    [fetchAllCategories.rejected](state, { error }) {
      state.loading = HTTP_STATUS.REJECTED;
      state.errorMessage = error.message;
    },
    [fetchSearchedCategories.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.searchedMovies = payload;
    },
    [fetchSelectedCategory.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED;
      state.selectedCategory = payload;
    },
  },
});

export default CategoriesSlice.reducer;
