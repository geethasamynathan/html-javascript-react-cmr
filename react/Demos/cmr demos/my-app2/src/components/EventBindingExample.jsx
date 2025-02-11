import def from "ajv/dist/vocabularies/applicator/additionalItems";
import React, { useState } from "react";
import image from "../images/premium_photo.avif";

const EventBindingExample = () => {
  const [likes, setLikes] = useState(0);
  const handleClick = () => {
    setLikes(likes + 1);
  };

  const [formData, setFormData] = useState({ name: "", email: "" });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <div>
        <button onClick={handleClick}>Like 👍{likes}</button>
      </div>
      <div>
        <h2>Register </h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>Name :{formData.name}</p>
        <p>Email :{formData.email} </p>

        <img
          src={image}
          alt="product"
          style={{ width: isZoomed ? "300px" : "150px", transition: "0.3s" }}
          onMouseOver={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
        />
      </div>
    </>
  );
};

export default EventBindingExample;
