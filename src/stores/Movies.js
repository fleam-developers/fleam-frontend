import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, API_URL2, HTTP_STATUS } from './constants'
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
  async (movieId) => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    const { data } = await axios.get(`${API_URL2}/movie?movieId=${movieId}`, config)
    return data
  },
)

export const fetchStream = createAsyncThunk(
  `${namespace}/fetchStream`,
  async (movieId) => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    const { data } = await axios.get(`${API_URL2}/movie/stream?movieId=${movieId}`, config)
    return data
  },
)

export const addNewMovie = createAsyncThunk(
  `${namespace}/addNewMovie`,
  async (contentData) => {
    console.log(contentData)
    await axios.post(`${API_URL}/movies/`, contentData)
  },
)

export const getUserRatingForMovie = createAsyncThunk(
  `${namespace}/getUserRatingForMovie`,
  async (contentId) => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    console.log(config)
    const userId = localStorage.getItem("userId");

    const rating = await axios.get(`${API_URL2}/movie/rating/${contentId}/${userId}`, config)
    if (rating !== null){
      return rating.data
    }
    else {
      return null
    }
  },
)

export const createRatings = createAsyncThunk(
  `${namespace}/createRatings`,
  async (contentData) => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    const {contentId, ratingData} = contentData

    await axios.post(`${API_URL2}/movie/rating/${contentId}`, ratingData, config)
  },
)


const MoviesSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    movies: null,
    selectedMovie:null,
    userRatingForMovie:null,
    stream: null,
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
    [getUserRatingForMovie.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED
      state.userRatingForMovie = payload
    },
    [fetchStream.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED
      state.stream = payload
    },
  },
})

export default MoviesSlice.reducer