import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    console.log("Hàm đăng nhập đã được chạy", formData);
    let responseData;
    await fetch("http://localhost:4005/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  const signup = async () => {
    console.log("Hàm đăng ký đã được chạy", formData);
    let responseData;
    await fetch("http://localhost:4005/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => (responseData = data));
    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Tên của bạn"
            />
          ) : (
            <></>
          )}

          <input
            name="email"
            value={formData.email}
            onChange={changeHandler}
            type="text"
            placeholder="Địa chỉ email"
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder="Mật khẩu"
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Tiếp tục
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Đã có tài khoản?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Đăng nhập tại đây
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Chưa có tài khoản?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Nhấn vào đây để đăng ký
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Tôi đồng ý với các điều khoản sử dụng và chính sách bảo mật.</p>
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
