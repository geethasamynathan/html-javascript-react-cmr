import React from "react";
import { useParams } from "react-router-dom";

const ViewOrder = () => {
  const { id } = useParams();
  return <h3>Viewing Order ID: {id}</h3>;
};

export default ViewOrder;
