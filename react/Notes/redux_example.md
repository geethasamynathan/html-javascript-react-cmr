# Redux Example for Freshers

## 1. Install Redux
Before using Redux, install the required dependencies:

```sh
npm install @reduxjs/toolkit react-redux
```

---

## 2. Create a Redux Store
Create a new folder `store/` and add the following files:

### `store/counterSlice.js`
This file defines a **Redux slice** that contains:
- Initial state
- Reducers to modify the state

```jsx
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
```

---

## 3. Configure the Redux Store
Create a **Redux store** by combining reducers.

### `store/store.js`
```jsx
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

---

## 4. Provide the Store to React
Wrap your application with `Provider` to make the Redux store available to all components.

### `index.js`
```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

---

## 5. Create a Counter Component
This component:
- Uses `useSelector` to read state from the store.
- Uses `useDispatch` to send actions to Redux.

### `Counter.js`
```jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
```

---

## 6. Use Counter Component in App.js
### `App.js`
```jsx
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>Redux Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;
```

---

## Summary
✅ **Redux Concepts Used:**
1. `createSlice()` - Creates a reducer and actions.
2. `configureStore()` - Configures the Redux store.
3. `Provider` - Wraps the application to provide the Redux store.
4. `useSelector()` - Reads state from the Redux store.
5. `useDispatch()` - Dispatches actions to modify state.

Would you like an example with **Redux Middleware** or **Async Actions (Redux Thunk)?** 🚀
