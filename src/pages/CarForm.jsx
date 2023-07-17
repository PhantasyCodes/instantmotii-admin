import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
import "./CarForm.css";

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

const CarForm = () => {
  const [carModel, setCarModel] = useState("");

  const handleSelectChange = (event) => {
    setCarModel(event.target.value);
  };
  return (
    <div className="login-container">
      <div className="logo">
        <Logo />
        <h1 className="title">InstantMotii</h1>
      </div>
      <div className="location-box car-box">
        <div className="location-text">
          <h1>Add new car</h1>
          <h2>Car Model</h2>
          <select value={carModel} onChange={handleSelectChange}>
            <option value="">Select an model...</option>
            <option value="Nissan Leaf">Nissan Leaf</option>
            <option value="option2">Tesla Model Y</option>
            <option value="option3">Hyundai Kona Electric</option>
          </select>
          <h2>Year</h2>
          <input type="text" />
          <h2>Color</h2>
          <input type="text" />
          <h2>License Plate</h2>
          <input type="text" />
          <h2>Rate</h2>
          <input type="text" />
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
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
};

export default CarForm;
