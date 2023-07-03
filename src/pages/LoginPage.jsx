import React from "react";
import "./LoginPage.css";
import "../App.css";
import Logo from "../components/Logo";
import { motion } from "framer-motion";

const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };


const LoginPage = () => {
  return (
    <div className="login-container">
      <motion.div className="logo" initial={{y: -100}} animate={{y:0}} transition={transition}>
        <Logo />
        <h1 className="title">InstantMotii</h1>
      </motion.div>
      <motion.div className="login-box" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.4}}>
        <h1>Welcome back, write your details to continue</h1>
        <div className="login-form">
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <button className="login-btn">Continue</button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
