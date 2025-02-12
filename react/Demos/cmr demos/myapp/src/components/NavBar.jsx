import React from "react";

const NavBar = ({ onSelectCourse }) => {
  if (!onSelectCourse) {
    console.error(
      "onSelectCourse function is not provided to Navbar component"
    );
  }
  return (
    <>
      <nav className="navbar">
        <button onClick={() => onSelectCourse("Python")}>Python</button>
        <button onClick={() => onSelectCourse("DataScience")}>
          DataScience
        </button>
        <button onClick={() => onSelectCourse("Azure")}>Azure</button>
        <button onClick={() => onSelectCourse("Kubernetes")}>Kubernetes</button>
      </nav>
    </>
  );
};

export default NavBar;
