import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'TREND',
  index: 0,
}

export const selectedMainTabSlice = createSlice({
  name: 'selectedMainTab',
  initialState,
  reducers: {
    setSelectedMainTab: (state, { payload }) => {
      state.value = payload.newTab
    },
    setSelectedMainTabIndex: (state, { payload }) => {
      state.index = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedMainTab, setSelectedMainTabIndex } = selectedMainTabSlice.actions

export default selectedMainTabSlice.reducer
