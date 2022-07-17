import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import postsAPI from './postsAPI';

const initialState = {
  entities: [],
  loading: 'idle'
}

// First, create the thunk
export const getPosts = createAsyncThunk('posts/getPosts', async (params={}, thunkAPI) => fetch(postsAPI.ENDPOINT_GET_POSTS).then((res) => res.json()));

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getPosts.fulfilled]: (state, { payload }) => {
      state.entities = payload;
      state.status = 'success';
    },
    [getPosts.rejected]: (state, action) => {
      state.status = 'failed';
    },
  }
})

export default postsSlice.reducer;
