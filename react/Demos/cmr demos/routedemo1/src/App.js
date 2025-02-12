import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Header from "./pages/Header";
import LoginModal from "./pages/LoginModel";
import Dashboard from "./pages/Dashboard";
import React, { useState } from "react";
// const Home = () => <h1> Home Page!</h1>;
// const About = () => <h1>About Page!</h1>;
// const Contact = () => <h1>Contact Page</h1>;
// const NotFound = () => <h2 style={{ color: "red" }}>404 - Page Not Found</h2>;
// const Login = () => <h2>Login Page</h2>;
// const Dashboard = () => (
//   <div>
//     <h2>Dashboard</h2>
//     <nav>
//       <ul>
//         <li>
//           <Link to="profile">Profile</Link>
//         </li>
//         <li>
//           <Link to="settings">Settings</Link>
//         </li>
//       </ul>
//     </nav>
//     <Outlet />
//   </div>
// );

const Profile = () => <h2>Profile Page</h2>;
const Settings = () => <h2>Settings Page</h2>;

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    <div>
      <Header
        isAuthenticated={isAuthenticated}
        onLogout={handleLogout}
        showLogin={() => setShowLoginModal(true)}
      />
      <LoginModal
        show={showLoginModal}
        handleClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
      <div className="container mt-5">
        {isAuthenticated ? <Dashboard /> : <h3>Please log in to continue.</h3>}
      </div>
    </div>

    // <Router>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to="/home">Home </Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About </Link>
    //       </li>
    //       <li>
    //         <Link to="/contact">Contact </Link>
    //       </li>
    //       <li>
    //         <Link to="/dashboard">Dashboard </Link>
    //       </li>
    //       <li>
    //         <Link to="/login">Login</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     {/* <Route path="/dashboard" element={<Dashboard />}> */}
    //     {/* <Route path="profile" element={<Profile />} />
    //       <Route path="settings" element={<Settings />} /> */}
    //     {/* </Route> */}
    //     <Route path="*" element={<NotFound />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route
    //       path="/dashboard"
    //       element={
    //         <ProtectedRoute>
    //           <Dashboard />
    //         </ProtectedRoute>
    //       }
    //     />
    //   </Routes>
    // </Router>
  );
}

export default App;
