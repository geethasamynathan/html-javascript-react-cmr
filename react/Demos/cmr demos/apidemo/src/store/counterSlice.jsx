import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // Slice name for identification
  initialState: { value: 0 }, // Initial state with value 0
  reducers: {
    increment: (state) => {
      state.value += 1; // Increases the counter value by 1
    },
    decrement: (state) => {
      state.value -= 1; // Decreases the counter value by 1
    },
    reset: (state) => {
      state.value = 0; // Resets the counter value to 0
    },
  },
});
export const { increment, decrement, reset } = counterSlice.actions; // Exporting actions
export default counterSlice.reducer; // Exporting the reducer to be used in the store
