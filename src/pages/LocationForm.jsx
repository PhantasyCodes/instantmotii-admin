import React from "react";
import "./LoginPage.css";
import "../App.css";
import Logo from "../components/Logo";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LocationForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

  const heroVariants = {
    initial: {
      opacity: 0,
    },

    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    navigate("/map");
  };

  return (
    <div className="login-container">
      <motion.div
        className="logo"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={transition}
      >
        <Logo />
        <h1 className="title">InstantMotii</h1>
      </motion.div>
      <motion.div
        className="login-box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="login-form">
          <input
            type="text"
            placeholder="Enter your email"
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Enter your password"
            onChange={handlePasswordChange}
          />
          <motion.button
            variants={heroVariants}
            animate="animate"
            initial="initial"
            whileHover={{
              boxShadow: "1rem 1rem 0 black",
              transition: { type: "spring", stiffness: 560, damping: 20 },
            }}
            className="login-btn"
            onClick={handleSubmit}
          >
            Continue
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default LocationForm;
