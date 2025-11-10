import React from "react";

function Header() {
  return (
    <header
      className="bg-white border-bottom position-fixed top-0 start-0 w-100 px-4 d-flex justify-content-between align-items-center"
      style={{
        zIndex: 1000,
        height: "90px", // slightly taller header
      }}
    >
      {/* Title */}
      <h1
        className="h4 text-dark mb-0"
        style={{
          paddingTop: "8px", // moves text down a bit
        }}
      >
        Tasks
      </h1>

      {/* Search bar */}
      <div style={{ width: "280px" }}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search tasks..."
            style={{ fontSize: "0.9rem" }}
          />
          <button className="btn btn-outline-secondary" type="button">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;