import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  entities: [
    {pair: 'XTZUSD', price: 12, hour: 6, volume: 2400000},
    {pair: 'ADAUSD', price: 1.234, hour: 0, volume: 370000000},
    {pair: 'ETHUSD', price: 2.912, hour: 16, volume: 2400000},
    {pair: 'LINKUSD', price: 305, hour: -3, volume: 60700000}
  ],
  loading: 'idle'
}

export const topBullCoinsSlice = createSlice({
  name: 'topBullCoins',
  initialState,
  reducers: {
    populateEntities: (state) => {
      // state.value += 1
    },
    addEntity: (state) => {
      // state.value -= 1
    },
    removeEntiry: (state, action) => {
      // state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { populateEntities, addEntity, removeEntiry } = topBullCoinsSlice.actions

export default topBullCoinsSlice.reducer
