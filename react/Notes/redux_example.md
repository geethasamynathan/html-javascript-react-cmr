# **Redux Example for Freshers**

## **1. Install Redux**
Before using Redux, install the required dependencies:
```bash
npm install @reduxjs/toolkit react-redux
```
### **Explanation:**
- `@reduxjs/toolkit`: The official recommended way to write Redux logic, which simplifies setting up the store and slices.
- `react-redux`: The library that connects Redux with React, allowing components to access the Redux store.

---

## **2. Create a Redux Store**
Create a new folder `store/` and add the following files:

### **store/counterSlice.js**
This file defines a Redux slice that contains:
- **Initial state**
- **Reducers to modify the state**

```js
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
```

### **Explanation:**
- `createSlice`: A function that simplifies creating a Redux slice.
- `initialState`: Defines the default value of the state.
- `reducers`: Contains the functions to update the state.
- `increment`, `decrement`, `reset`: Actions that modify the state.
- `export default counterSlice.reducer`: The reducer function is exported to be used in the store.

---

## **3. Configure the Redux Store**
Create a Redux store by combining reducers.

### **store/store.js**
```js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer, // Adding counter reducer to the store
  },
});

export default store; // Exporting the store for use in the application
```

### **Explanation:**
- `configureStore`: A function that sets up the Redux store.
- `reducer`: Combines all reducers in the application (in this case, only `counterReducer`).
- `export default store`: Makes the store available for use in other parts of the application.

---

## **4. Provide the Store to React**
Wrap your application with `Provider` to make the Redux store available to all components.

### **index.js**
```js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import App from "./App";

ReactDOM.render(
  <Provider store={store}> // Wrapping the application with Redux Provider
    <App />
  </Provider>,
  document.getElementById("root")
);
```

### **Explanation:**
- `Provider`: A higher-order component that makes the Redux store accessible to all React components.
- `store={store}`: Passes the Redux store to the application.
- `ReactDOM.render()`: Renders the root component of the application.

---

## **5. Create a Counter Component**
This component:
- Uses `useSelector` to read state from the store.
- Uses `useDispatch` to send actions to Redux.

### **Counter.js**
```js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./store/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Accessing counter state from Redux store
  const dispatch = useDispatch(); // Getting dispatch function to send actions

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button> // Calls increment action
      <button onClick={() => dispatch(decrement())}>Decrement</button> // Calls decrement action
      <button onClick={() => dispatch(reset())}>Reset</button> // Calls reset action
    </div>
  );
};

export default Counter;
```

### **Explanation:**
- `useSelector(state => state.counter.value)`: Extracts the counter value from the Redux store.
- `useDispatch()`: Returns the `dispatch` function to send actions to the store.
- `dispatch(increment())`: Calls the increment reducer.
- `dispatch(decrement())`: Calls the decrement reducer.
- `dispatch(reset())`: Calls the reset reducer.

---

## **6. Use Counter Component in `App.js`**
### **App.js**
```js
import React from "react";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <h1>Redux Counter App</h1>
      <Counter /> // Using Counter component
    </div>
  );
}

export default App;
```

### **Explanation:**
- `Counter`: The counter component is included inside `App`.
- `<h1>Redux Counter App</h1>`: Displays the title of the application.

---

## **Final Summary**
| Step | Action |
|------|--------|
| **1** | Install Redux dependencies |
| **2** | Create a Redux slice (`counterSlice.js`) |
| **3** | Configure the store (`store.js`) |
| **4** | Provide the store in `index.js` using `Provider` |
| **5** | Create `Counter.js` to use Redux state and actions |
| **6** | Use `Counter` component inside `App.js` |

---

### **Final Thoughts**
- **Redux Toolkit** makes Redux easier to use with built-in optimizations.
- **Separation of concerns** (store, slices, and components) improves code maintainability.
- **Redux DevTools** can be used for debugging state changes.



