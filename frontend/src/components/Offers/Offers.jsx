import React from "react";
import "./Offers.css";
import exclusive_image from "../Assets/exclusive_image.png";

export const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Ưu Đãi</h1>
        <h1>Độc Quyền Dành Cho Bạn</h1>
        <p>CHỈ CÓ TRÊN CÁC SẢN PHẨM BÁN CHẠY NHẤT</p>
        <button>Kiểm tra ngay</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};
