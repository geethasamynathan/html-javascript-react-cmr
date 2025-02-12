import React from "react";
import { Link } from "react-router-dom";

const UserList = () => {
  return (
    <div>
      <h3>User List</h3>
      <ul>
        <li>
          User John - <Link to="/admin/users/edit/1">Edit</Link>
        </li>
        <li>
          User Alice - <Link to="/admin/users/edit/2">Edit</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserList;
