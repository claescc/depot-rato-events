import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialState = { value: [{ stockitem: "" }] }
const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    stockAdded: (state, action) => {
      state.value = action.payload
    },
    stockRemoved: state => {
      state = initialState
    },
  },
})
export const { stockAdded, stockRemoved } = inventorySlice.actions
export const store = configureStore({
  reducer: {
    inventory: inventorySlice.reducer,
  },
})
