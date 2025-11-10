import React from "react";

function Sidebar() {
  return (
    <aside
      className="d-flex flex-column bg-light border-end p-3 vh-100 position-fixed top-0 start-0"
      style={{
        width: "220px",
        marginTop: "90px", // same as header height
      }}
    >
      <h5 className="mb-4">Menu</h5>

      <ul className="nav flex-column gap-2">
        <li className="nav-item">🏠 Dashboard</li>
        <li className="nav-item">👥 Users</li>
        <li className="nav-item"><strong>📝 Tasks</strong></li>
        <li className="nav-item">⚙️ Settings</li>
      </ul>

      <div className="mt-auto small text-muted">
        <hr />
        <span>Username</span><br />
        <a href="#">Logout</a>
      </div>
    </aside>
  );
}

export default Sidebar;