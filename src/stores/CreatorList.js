import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from './constants'
import axios from 'axios'

const namespace = 'creators'

export const fetchAllCreators = createAsyncThunk(
  `${namespace}/fetchAllCreators`,
  async () => {
    const { data } = await axios.get(`${API_URL}/movies`)
    return data
  }
)

export const addNewCreator = createAsyncThunk(
  `${namespace}/addNewCreator`,
  async (creatorData) => {
    console.log(creatorData)
    // axios.post(`${API_URL}/movies/`, creatorData)
  },
)

const CreatorListSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    creators: null,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllCreators.pending](state) {
      state.loading = HTTP_STATUS.PENDING
    },
    [fetchAllCreators.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED
      state.creators = payload
    },
    [fetchAllCreators.rejected](state, { error }) {
      state.loading = HTTP_STATUS.REJECTED
      state.errorMessage = error.message
    },
  },
})

export default CreatorListSlice.reducer