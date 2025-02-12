import React from "react";

const Header = ({ isAuthenticated, onLogout, showLogin }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <a className="navbar-brand mx-3" href="/">
        React App
      </a>
      <div className="ml-auto mx-3">
        {isAuthenticated ? (
          <button className="btn btn-danger" onClick={onLogout}>
            Logout
          </button>
        ) : (
          <button className="btn btn-primary" onClick={showLogin}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Header;
