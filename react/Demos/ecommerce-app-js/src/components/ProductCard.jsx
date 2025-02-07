import { Link } from "react-router-dom";
import React from "react";
const ProductCard = ({ product }) => {
  return (
    <div>
      <img src={product.image} alt={product.title} width="100" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;
