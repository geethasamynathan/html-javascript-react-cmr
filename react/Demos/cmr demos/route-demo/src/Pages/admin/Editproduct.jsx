import React from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  return <h3>Edit Product ID: {id}</h3>;
};

export default EditProduct;
