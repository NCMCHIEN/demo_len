import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img
        src="https://tiemlenhandmade.vn/wp-content/uploads/2023/05/Untitled-1.gif"
        width="100px"
        alt=""
        className="nav-logo"
      />
      <img src={navProfile} className="nav-profile" alt="" />
    </div>
  );
}

export default Navbar;
