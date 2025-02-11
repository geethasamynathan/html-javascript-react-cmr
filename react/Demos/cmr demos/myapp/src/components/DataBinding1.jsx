import React, { useState } from "react";

const DataBinding1 = () => {
  const companyName = "Capgemini";

  const num1 = 900;
  const num2 = 564;

  const greet = () => "Hello, from Greet method";

  const courses = [
    "Python",
    "Data Science",
    "Data Engineering",
    "Cloud",
    "Kubernetes",
  ];

  const [message, setMessage] = useState("click the Button");

  const handleClick = (event) => {
    setMessage("Button clicked");
  };

  const [isLoggedin, setIsLoggedIn] = useState(false);
  return (
    <>
      <header>
        <h1>{companyName}</h1>
        <h2>{isLoggedin ? "welcome, User!.." : "Please Login"}</h2>
        <button onClick={() => setIsLoggedIn(!isLoggedin)}>
          {isLoggedin ? "Logout" : "Login"}
        </button>
        {/* <h2> Calculation using expression</h2>
        <p> Sum :{num1 + num2}</p>
        <p> Multiplication : {num1 * num2}</p>

        <h1> Function Call</h1>
        <h4>{greet()}</h4>

        <h1> Dynamic List</h1>
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>

        <h1> Event Binding</h1>
        <h2>{message}</h2>
        <button onClick={handleClick}>Click Me</button> */}
      </header>
    </>
  );
};

export default DataBinding1;
