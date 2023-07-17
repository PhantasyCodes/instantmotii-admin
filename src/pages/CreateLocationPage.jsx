import React, { useEffect } from "react";
import "./CreateLocationPage.css";
import Logo from "../components/Logo";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

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

const CreateLocationPage = () => {
  const location = useLocation();
  console.log(location);

    const handleSubmit = async () => {
    }

  return (
    <div className="location-container">
      <div className="logo">
        <Logo />
        <h1 className="title">InstantMotii</h1>
      </div>
      <div className="location-box">
        <div className="location-text">
          <h1>Add new vehicle</h1>
          <h2>Location Name</h2>
          <input type="text" />
          <h2>Location Coordinates</h2>
          <input
            type="text"
            value={`(${location.state.lat.toFixed(
              3
            )}, ${location.state.lat.toFixed(3)})`}
            disabled
          />
        </div>
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
    </div>
  );
};

export default CreateLocationPage;
