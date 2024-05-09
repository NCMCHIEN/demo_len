import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/logo_big.png";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img
          src="https://tiemlenhandmade.vn/wp-content/uploads/2023/05/Untitled-1.gif"
          width="100px"
          alt=""
        />
        <p>TIỆM CỦA LEN</p>
      </div>
      <ul className="footer-links">
        <li>Công Ty</li>
        <li>Sản Phẩm</li>
        <li>Văn Phòng</li>
        <li>Giới Thiệu</li>
        <li>Liên Hệ</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  );
};
