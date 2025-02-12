import React from "react";
import { Link, Outlet } from "react-router-dom";
const AdminLayout = () => {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link to="/admin/products">Products</Link>
          </li>
          <li>
            <Link to="/admin/orders">Orders</Link>
          </li>
          <li>
            <Link to="/admin/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* This will render nested routes */}
    </div>
  );
};

export default AdminLayout;
