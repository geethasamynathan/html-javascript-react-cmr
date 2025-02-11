import React from "react";

const DataBinding2 = () => {
  const courseTable = [
    { id: 1, name: "Python", duration: "2 Months", price: "5600" },
    { id: 2, name: "Data Science", duration: "2 Months", price: "8990" },
    { id: 3, name: "Azure", duration: "3 Months", price: "8999" },
    { id: 4, name: "Aws", duration: "3 Months", price: "9999" },
    { id: 5, name: "Kubernetes", duration: "2 Months", price: "12999" },
  ];

  return (
    <>
      <div>
        <table border="1px">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Duration</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {courseTable.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.duration}</td>
                <td>{course.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DataBinding2;
