import { createAsyncThunk, createSlice, useDispatch } from '@reduxjs/toolkit';

const initialState = {
  entities: [],
  loading: 'idle'
}

const url = 'https://my-json-server.typicode.com/akscipy/test-json-server/trend';

export const getTrendingCoinsAsync = createAsyncThunk('posts/getTrendingCoinsAsync', async (params={}, thunkAPI) => fetch(url).then((res) => res.json()));

export const trendingCoinsAsyncSlice = createSlice({
  name: 'trendingCoinsAsync',
  initialState,
  reducers: {},
  extraReducers: {
    [getTrendingCoinsAsync.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getTrendingCoinsAsync.fulfilled]: (state, { payload }) => {
      state.entities = payload;
      state.status = 'success';
    },
    [getTrendingCoinsAsync.rejected]: (state, action) => {
      state.status = 'failed';
    },
  }
})

export default trendingCoinsAsyncSlice.reducer
