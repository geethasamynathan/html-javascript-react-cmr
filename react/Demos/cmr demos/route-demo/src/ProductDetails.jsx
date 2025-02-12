import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  let { id } = useParams();
  return (
    <>
      <h2> Product Details {id}</h2>
    </>
  );
}
