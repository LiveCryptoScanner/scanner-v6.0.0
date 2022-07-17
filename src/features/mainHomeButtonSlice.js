import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  buttons: [
    {
      name: 'Standard',
      value: 'Standard'
    },
    {
      name: 'Customize',
      value: 'Customize'
    },
    {
      name: 'Profile',
      value: 'Profile'
    }
  ],
  selectedMainHomeButton:   {
      name: 'Standard',
      value: 'Standard'
    },
}

export const mainHomeButtonSlice = createSlice({
  name: 'mainHomeButton',
  initialState,
  reducers: {
    setMainHomeButton: (state, { payload }) => {
      state.selectedMainHomeButton = payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMainHomeButton } = mainHomeButtonSlice.actions

export default mainHomeButtonSlice.reducer
