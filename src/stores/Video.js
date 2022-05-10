import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from './constants'
import axios from 'axios'

const namespace = 'video'

export const fetchVideo = createAsyncThunk(
  `${namespace}/fetchVideo`,
  async (obj, { dispatch, getState, signal }) => {
    const source = axios.CancelToken.source()

    signal.addEventListener('abort', () => {
      source.cancel()
    })

    const { data } = await axios.get(`${API_URL}/movies`)
    return data
  }
)

const VideoSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    video: null,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: {
    [fetchVideo.pending](state) {
      state.loading = HTTP_STATUS.PENDING
    },
    [fetchVideo.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED
      state.video = payload
    },
    [fetchVideo.rejected](state, { error }) {
      state.loading = HTTP_STATUS.REJECTED
      state.errorMessage = error.message
    },
  },
})

export default VideoSlice.reducer