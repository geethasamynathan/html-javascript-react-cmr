import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../store/counterSlice";
import store from "../store/store";

const Counter = () => {
  const count = useSelector((state) => state.counter.value); // Accessing counter state from Redux store
  const dispatch = useDispatch(); // Getting dispatch function to send actions

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
