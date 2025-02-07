import Navbar from "./components/navbar";
import ProductList from "./components/ProductList";
import ProductDetails from "./pages/ProductDetails";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </>
  );
}

export default App;
