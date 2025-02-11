import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import VariableDataBinding from "./components/VariableDataBinding1";
import ReactComponentExample from "./components/ReactComponentExample";
import EventBindingExample from "./components/EventBindingExample";
import EventBindinExample2 from "./components/EventBindingExample2";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <EventBindinExample2 />
    {/* <EventBindingExample /> */}

    {/* <ReactComponentExample /> */}
    {/* <VariableDataBinding /> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
