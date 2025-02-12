import React from "react";

const CourseCard = ({ course }) => {
  return (
    <>
      <div className="course-card">
        <h2>{course.title}</h2>
        <img src={course.image} alt={course.title} />
        <p>{course.description}</p>
      </div>
    </>
  );
};

export default CourseCard;
