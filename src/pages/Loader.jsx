import React from "react";
import "./Loader.css";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/logo-anim.json";
import { motion } from "framer-motion";

const transition = { duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] };

const Loader = () => {
  const navigate = useNavigate();
  const handlePageTransition = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <Lottie
          animationData={animationData}
          loop={false}
          autoplay={true}
          onEnterFrame={handlePageTransition}
          style={{ width: "50%", height: "50%"}}
        />
      </div>
      <motion.div
        className="container container2"
        initial={{ y: "0%" }}
        exit={{ y: "-100%", transition: { delay: 1, ...transition } }}
        transition={transition}
      >
      </motion.div>
    </>
  );
};

export default Loader;
