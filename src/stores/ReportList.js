import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from './constants'
import axios from 'axios'

const namespace = 'reports'

export const fetchAllReports = createAsyncThunk(
  `${namespace}/fetchAllReports`,
  async () => {
    const { data } = await axios.get(`${API_URL}/movies`)
    return data
  }
)

const ReportListSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    reports: null,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: {
    [fetchAllReports.pending](state) {
      state.loading = HTTP_STATUS.PENDING
    },
    [fetchAllReports.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED
      state.reports = payload
    },
    [fetchAllReports.rejected](state, { error }) {
      state.loading = HTTP_STATUS.REJECTED
      state.errorMessage = error.message
    },
  },
})

export default ReportListSlice.reducer