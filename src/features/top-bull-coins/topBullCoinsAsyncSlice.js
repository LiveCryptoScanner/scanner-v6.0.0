import { createAsyncThunk, createSlice, useDispatch } from '@reduxjs/toolkit';

const mockData = [
  {pair: 'XTZUSD', price: 12, hour: 6, volume: 2400000},
  {pair: 'ADAUSD', price: 1.234, hour: 0, volume: 370000000},
  {pair: 'ETHUSD', price: 2.912, hour: 16, volume: 2400000},
  {pair: 'LINKUSD', price: 305, hour: -3, volume: 60700000}
];

const initialState = {
  entities: [],
  loading: 'idle'
}


// https://my-json-server.typicode.com/akscipy/test-json-server/topBullCoins
const url = 'https://my-json-server.typicode.com/akscipy/test-json-server/topBullCoins';

// export const getPosts = createAsyncThunk('posts/getPosts', async (params={}, thunkAPI) => fetch(postsAPI.ENDPOINT_GET_POSTS).then((res) => res.json()));
export const getTopBullCoinsAsync = createAsyncThunk('posts/getTopBullCoinsAsync', async (params={}, thunkAPI) => fetch(url).then((res) => res.json()));

// export const getTopBullCoinsAsync = createAsyncThunk('posts/topBullCoinsAsync', async (params={}, thunkAPI) => mock(true, 1000).then((res) => res.json()));
// export const getTopBullCoinsAsync = createAsyncThunk('posts/topBullCoinsAsync', async (params={}, thunkAPI) => mock(true, 1000).then((res) => res));

// const mock = (success, timeout) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if(success) {
//         resolve(mockData);
//       } else {
//         reject({message: 'Error'});
//       }
//     }, timeout);
//   });
// }

// mock(true, 1000).then((res) => {
//   console.log(res);
// }).catch((e) => {
//   console.error(e);
// })

export const topBullCoinsAsyncSlice = createSlice({
  name: 'topBullCoinsAsync',
  initialState,
  reducers: {},
  extraReducers: {
    [getTopBullCoinsAsync.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getTopBullCoinsAsync.fulfilled]: (state, { payload }) => {
      state.entities = payload;
      state.status = 'success';
    },
    [getTopBullCoinsAsync.rejected]: (state, action) => {
      state.status = 'failed';
    },
  }
})

export default topBullCoinsAsyncSlice.reducer
