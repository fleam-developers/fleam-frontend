import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from './constants'
import axios from 'axios'

const namespace = 'categories'

export const fetchAllCategories = createAsyncThunk(
  `${namespace}/fetchAllCategories`,
  async () => {
    const { data } = await axios.get(`${API_URL}/categories`)
    return data
  }
)

export const fetchSearchedCategories = createAsyncThunk(
  `${namespace}/fetchSearchedCategories`,
  async (obj) => {
    const { data } = await axios.get(`${API_URL}/categories`)
    return data
  }
)

export const fetchSelectedCategory = createAsyncThunk(
  `${namespace}/fetchSelectedCategory`,
  async (obj) => {
    console.log(obj)
    const { data } = await axios.get(`${API_URL}/categories/${obj}`)
    console.log(data)
    return data
  }
)

const CategoriesSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    categories: null,
    selectedCategory: null,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllCategories.pending](state) {
      state.loading = HTTP_STATUS.PENDING
    },
    [fetchAllCategories.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED
      state.categories = payload
    },
    [fetchAllCategories.rejected](state, { error }) {
      state.loading = HTTP_STATUS.REJECTED
      state.errorMessage = error.message
    },
    [fetchSearchedCategories.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED
      state.categories = payload
    },
    [fetchSelectedCategory.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED
      state.selectedCategory = payload
    },
  },
})

export default CategoriesSlice.reducer