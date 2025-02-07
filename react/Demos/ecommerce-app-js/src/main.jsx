import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";
import ReactDOM from "react-dom/client"; // ✅ Correct import for React 18
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import App from "./app.jsx";
ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
