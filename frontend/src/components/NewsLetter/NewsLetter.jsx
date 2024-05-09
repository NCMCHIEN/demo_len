import React from "react";
import "./NewsLetter.css";

export const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Nhận Ưu Đãi Độc Quyền Trên Email Của Bạn</h1>
      <p>Đăng ký nhận bản tin của chúng tôi và cập nhật thông tin mới nhất</p>
      <div>
        <input type="email" placeholder="Email Của Bạn" />
        <button>Đăng Ký</button>
      </div>
    </div>
  );
};
