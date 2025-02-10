import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
const rootElement = document.getElementById("app");

// Create a React root and render App component
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
