import React, { useEffect } from "react";
import "./CreateLocationPage.css";
import Logo from "../components/Logo";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
  const url = useSelector((state) => state.user.url);
  const [locationName, setLocationName] = React.useState("");
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleLocationChange = (e) => {
    setLocationName(e.target.value);
  };

  const handleSubmit = async () => {
    axios
      .post(`${url}/api/v1/location/create-location`, {
        name: locationName,
        latitude: location.state.lat,
        longitude: location.state.lng,
      })
      .then((response) => {
        if (response.status === 201) {
          navigate("/admin");
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="location-container">
      <div className="logo">
        <Logo />
        <h1 className="title">InstantMotii</h1>
      </div>
      <div className="location-box">
        <div className="location-text">
          <h1>Add new location</h1>
          <h2>Location Name</h2>
          <input
            type="text"
            value={locationName}
            onChange={handleLocationChange}
          />
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
