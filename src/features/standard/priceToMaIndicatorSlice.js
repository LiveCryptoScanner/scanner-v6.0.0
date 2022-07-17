import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  types: [
    {
      name: 'SMA',
      value: 'SMA'
    },
    {
      name: 'EMA',
      value: 'EMA'
    }
  ],
  length1Values: [
    {
      name: '8',
      value: '8'
    },
    {
      name: '13',
      value: '13'
    },
    {
      name: '21',
      value: '21'
    },
    {
      name: '34',
      value: '34'
    },
    {
      name: '55',
      value: '55'
    },
    {
      name: '200',
      value: '200'
    },
  ],
  length2Values: [
    {
      name: 'FSR',
      value: 'FSR'
    },
    {
      name: 'Lagging Full',
      value: 'Lagging Full'
    },
    {
      name: 'Leading Full',
      value: 'Leading Full'
    },
    {
      name: 'Leading /Lagging Cross',
      value: 'Leading/Lagging Cross'
    }
  ],
  type: 'EMA',
  length1: '55',
  length2: 'FSR',
}

export const priceToMaIndicatorSlice = createSlice({
  name: 'priceToMaIndicator',
  initialState,
  reducers: {
    setType: (state, { payload }) => {
      state.type = payload
    },
    setLength1: (state, { payload }) => {
      state.length1 = payload
    },
    setLength2: (state, { payload }) => {
      state.length2 = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setType, setLength1, setLength2 } = priceToMaIndicatorSlice.actions

export default priceToMaIndicatorSlice.reducer
