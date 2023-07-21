import { createSlice } from '@reduxjs/toolkit'

export interface State {
  count: number
}

export const initialState: State = {
  count: 0,
}

export const Slice = createSlice({
  name: 'store',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
  },
})

export const { increment, decrement } = Slice.actions

export default Slice.reducer
