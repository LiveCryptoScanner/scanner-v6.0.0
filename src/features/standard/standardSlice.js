import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pairs: [
    {
      name: 'BTC',
      value: 'BTC'
    },
    {
      name: 'USDT',
      value: 'USDT'
    },
    {
      name: 'USD',
      value: 'USD'
    },
    {
      name: 'ALL',
      value: 'ALL'
    }
  ],
  exchanges: [
    {
      name: 'Binance',
      value: 'Binance',
    },
    {
      name: 'FTX',
      value: 'FTX',
    },

  ],
  timeframes: [
    {
      name: '1H',
      value: '1H',
    },
    {
      name: '4H',
      value: '4H',
    },
    {
      name: '12H',
      value: '12H',
    },
    {
      name: '1D',
      value: '1D',
    },
    {
      name: '4W',
      value: '4W',
    },
  ],
  laggingfulls: [
    {
      name: 'BULL',
      value: 'BULL'
    },
    {
      name: 'BEAR',
      value: 'BEAR'
    }
  ],
  sortby: [
    {
      name: 'Name',
      value: 'Name'
    },
    {
      name: 'Popularity',
      value: 'Popularity'
    }
  ],
  pair: 'BTC',
  exchange: 'Binance',
  timeframe:'1H',
  laggingfull:'BULL',
  sortBy:'Name'
}

export const standardSlice = createSlice({
  name: 'standard',
  initialState,
  reducers: {
    setPair: (state, { payload }) => {
      state.pair = payload
    },
    setExchange: (state, { payload }) => {
      state.exchange = payload
    },
    setTimeframe:(state, { payload }) => {
      state.timeframe = payload
    },
    setLaggingFull:(state, { payload }) => {
      state.laggingfull = payload
    },
    setSortBy:(state, {payload}) =>{
      state.sortBy = payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setPair, setExchange, setTimeframe, setLaggingFull, setSortBy } = standardSlice.actions

export default standardSlice.reducer
