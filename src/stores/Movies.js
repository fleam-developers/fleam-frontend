import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from './constants'
import axios from 'axios'

const namespace = 'movies'

export const fetchAllMovies = createAsyncThunk(
  `${namespace}/fetchAllMovies`,
  async () => {
    const { data } = await axios.get(`${API_URL}/movies`)
    return data
  },
)

export const fetchSelectedMovie = createAsyncThunk(
  `${namespace}/fetchSelectedMovie`,
  async (movieName) => {
    const { data } = await axios.get(`${API_URL}/movies/${movieName}`)
    return data
  },
)

const MoviesSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    movies: null,
    selectedMovie:null,
    errorMessage: null
  },
  reducers: {},
  extraReducers: {
    [fetchAllMovies.pending](state) {
      state.loading = HTTP_STATUS.PENDING
    },
    [fetchAllMovies.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED
      state.movies = payload
    },
    [fetchAllMovies.rejected](state, { error }) {
      state.loading = HTTP_STATUS.REJECTED
      state.errorMessage = error.message
    },
    [fetchSelectedMovie.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED
      state.selectedMovie = payload
    },
  },
})

export default MoviesSlice.reducer