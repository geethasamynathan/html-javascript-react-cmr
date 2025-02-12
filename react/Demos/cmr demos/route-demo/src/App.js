import logo from "./logo.svg";
import "./App.css";
import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
  Navigate,
} from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import ProtectedRoute from "./Pages/ProtectedRoute";

const Home = () => {
  return <h1> Home Page!..</h1>;
};

const About = () => {
  return <h1>About Page</h1>;
};
const Contact = () => {
  return <h1>Contact Page!...</h1>;
};
const Dashboard = () => (
  <>
    <div>
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="profile">Profile</Link>
          </li>
          <li>
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
    <Outlet />
  </>
);
const Profile = () => <h3>Profile Page</h3>;
const Settings = () => <h3>Settings Page</h3>;
const NotFound = () => <h2>404 - Page Not Found</h2>;
const Login = () => <h2>Login Page <button onClick={}></button></h2>;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route path="/old-about" element={<Navigate to="/about" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    // <Router>
    //   <nav>
    //     <Link to="/">Home</Link>|<Link to="/about">About</Link>|
    //     <Link to="/contact">Contact</Link>
    //     <Link to="/dashboard">Dashboard</Link>
    //   </nav>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/home" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route ptah="/dashboard/*" element={<Dashboard />}>
    //       <Route path="profile" element={<Profile />} />
    //       <Route path="settings" element={<Settings />} />
    // //     </Route>
    //   </Routes>
    // </Router>
  );
}

export default App;
