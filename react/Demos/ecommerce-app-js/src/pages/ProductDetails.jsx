import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import React from "react";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      {product ? (
        <>
          <img src={product.image} alt={product.title} width="200" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
