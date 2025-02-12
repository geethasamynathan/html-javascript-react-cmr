import React from "react";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams();
  return <h3>Edit User ID: {id}</h3>;
};

export default EditUser;
