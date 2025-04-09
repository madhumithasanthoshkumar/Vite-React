import React, { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        gap: "20px",
        backgroundColor: "black",
        padding: "10px",
      }}
    >
      <div>
        <Link to="/reduxcounter" style={{ color: "white", textDecoration: "none" }}>
          Todo
        </Link>
      </div>
      <div>
        <Link
          to="/Profilecard"
          style={{ color: "white", textDecoration: "none" }}
        >
          Profile Card
        </Link>
      </div>
      <div>
        <Link to="/GridView" style={{ color: "white", textDecoration: "none" }}>
          Grid App
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
