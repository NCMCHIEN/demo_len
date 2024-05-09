import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom"; // import Link từ react-router-dom
import { ShopContext } from "../Context/ShopContext";
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link style={{ textDecoration: "none" }} to="/">
          <img
            src="https://tiemlenhandmade.vn/wp-content/uploads/2023/05/Untitled-1.gif"
            alt=""
            width="100px"
          />
        </Link>
        <p>LEN</p>
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Trang Chủ
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("hoalen");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/hoalen">
            Hoa Len
          </Link>

          {menu === "hoalen" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("hoathu");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/hoathu">
            Hoa Thú
          </Link>
          {menu === "hoathu" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("hoabo");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/hoabo">
            Hoa Bó
          </Link>

          {menu === "hoabo" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            ĐĂNG XUẤT
          </button>
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
            <button>ĐĂNG NHẬP</button>
          </Link>
        )}

        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>

        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
