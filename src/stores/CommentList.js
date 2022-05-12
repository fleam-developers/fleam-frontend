import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { API_URL, HTTP_STATUS } from './constants'
import axios from 'axios'

const namespace = 'comments'

export const fetchAllComments = createAsyncThunk(
  `${namespace}/fetchAllComments`,
  async () => {
    const { data }= await axios.get(`${API_URL}/movies`)
    return data
  }
)

export const addNewComment = createAsyncThunk(
  `${namespace}/fetchAllComments`,
  async (obj) => {
    const {contentName, commentData} = obj;
    console.log(contentName, commentData)
    const { data } = axios.get(`${API_URL}/movies/`)
    console.log(data)
    axios.post(`${API_URL}/movies/${contentName}`, commentData)
    console.log("function work")
    //console.log(data)
    // const { data } = await axios.get(`${API_URL}/movies`, )
    return data;
  }
)

const CommentListSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    comments: null,
    errorMessage: null,
  },
  reducers: {
    addNewComment(state, { payload }) {
      console.log("reducer work")
      //state.comments = payload
    },
  },
  extraReducers: {
    [fetchAllComments.pending](state) {
      state.loading = HTTP_STATUS.PENDING
    },
    [fetchAllComments.fulfilled](state, { payload }) {
      state.loading = HTTP_STATUS.FULFILLED
      state.comments = payload
    },
    [fetchAllComments.rejected](state, { error }) {
      state.loading = HTTP_STATUS.REJECTED
      state.errorMessage = error.message
    },
  },
})

export default CommentListSlice.reducer