import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminLayout from "./AdminLayout";
import ProductList from "../Pages/admin/Productlist";
import AddProduct from "../Pages/admin/Addproduct";
import EditProduct from "../Pages/admin/Editproduct";
import OrderList from "../Pages/admin/Orderlist";
import ViewOrder from "../Pages/admin/Vieworder";
import UserList from "../Pages/admin/Userlist";
import EditUser from "../Pages/admin/Edituser";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="products" element={<ProductList />} />
        <Route path="products/add" element={<AddProduct />} />
        <Route path="products/edit/:id" element={<EditProduct />} />
        <Route path="orders" element={<OrderList />} />
        <Route path="orders/view/:id" element={<ViewOrder />} />
        <Route path="users" element={<UserList />} />
        <Route path="users/edit/:id" element={<EditUser />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
