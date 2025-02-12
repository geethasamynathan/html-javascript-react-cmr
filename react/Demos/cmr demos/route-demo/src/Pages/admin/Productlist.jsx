import React from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  return (
    <div>
      <h3>Product List</h3>
      <Link to="/admin/products/add">Add New Product</Link>
      <ul>
        <li>
          Product 1 - <Link to="/admin/products/edit/1">Edit</Link>
        </li>
        <li>
          Product 2 - <Link to="/admin/products/edit/2">Edit</Link>
        </li>
      </ul>
    </div>
  );
};

export default ProductList;
