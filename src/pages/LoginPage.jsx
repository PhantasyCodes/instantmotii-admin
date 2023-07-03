import React from "react";
import "./LoginPage.css";
import "../App.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome back, write your details to continue</h1>
        <div className="login-form">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
