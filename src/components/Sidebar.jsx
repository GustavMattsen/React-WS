import React from "react";

function Sidebar() {
  return (
    <div
      className="bg-light border-end vh-100 p-3"
      style={{ width: "200px", position: "fixed", left: 0, top: 0 }}
    >
      <h5 className="mb-4">Menu</h5>
      <ul className="list-unstyled">
        <li>Dashboard</li>
        <li>Users</li>
        <li>
          <strong>Tasks</strong>
        </li>
        <li>Settings</li>
      </ul>
      <div className="mt-auto position-absolute bottom-0 mb-3">
        <hr />
        <small>Username</small>
        <br />
        <a href="#">Logout</a>
      </div>
    </div>
  );
}

export default Sidebar;
