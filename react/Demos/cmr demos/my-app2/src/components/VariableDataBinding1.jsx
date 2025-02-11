import React, { useState } from "react";

const VariableDataBinding = () => {
  const companyName = "Tech Pinnacle Solutions";
  const num1 = 100;
  const num2 = 200;
  const greet = () => "Hello, from Anonymouns function";

  const [message, setMessage] = useState("Click the button");

  const handleClick = () => {
    setMessage("Button Clicked!..");
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const courses = ["Python", "Data Science", "React js", "Data Factory"];

  const courseTable = [
    { id: 101, name: "Python", duration: "2 months" },
    { id: 102, name: "Data Science", duration: "3 months" },
    { id: 103, name: "React js", duration: "2 months" },
    { id: 104, name: "Data Factory", duration: "2 months" },
  ];

  const isHighlighted = true;
  return (
    <>
      {/* <h1>{companyName}</h1>
      <h2> Sum :{num1 + num2}</h2>
      <h2> Prodcut:{num1 * num2}</h2>
      <h2>{greet()}</h2>

      <h2>{message}</h2>
      <button onClick={handleClick}>click Me</button>

      <h2>{isLoggedIn ? "welcome user!..." : "please Login"} </h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <h2> Courses Available</h2>
      <ul>
        {courses.map((course, index) => (
          <li key="index">{course}</li>
        ))}
      </ul> */}
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {courseTable.map((course) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{course.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div
        style={{
          padding: "3px",
          backgroundColor: isHighlighted ? "yellow" : "lightgrey",
        }}
      >
        <h2> Applying Styles</h2>
      </div>
    </>
  );
};

export default VariableDataBinding;
