import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // Adding counter reducer to the store
  },
});

export default store; // Exporting the store for use in the application
