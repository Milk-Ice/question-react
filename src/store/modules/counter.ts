import { createSlice } from '@reduxjs/toolkit'
const countSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    message: 'hello'
  },
  reducers: {
    changeMessageAction(state, { payload }) {
      state.message = payload
    }
  }
})
export const { changeMessageAction } = countSlice.actions
export default countSlice.reducer
