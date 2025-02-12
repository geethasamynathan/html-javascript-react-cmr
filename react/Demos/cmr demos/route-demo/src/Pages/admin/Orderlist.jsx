import React from "react";
import { Link } from "react-router-dom";

const OrderList = () => {
  return (
    <div>
      <h3>Order List</h3>
      <ul>
        <li>
          Order 101 - <Link to="/admin/orders/view/101">View</Link>
        </li>
        <li>
          Order 102 - <Link to="/admin/orders/view/102">View</Link>
        </li>
      </ul>
    </div>
  );
};

export default OrderList;
