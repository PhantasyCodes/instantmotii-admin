import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Logo from "../components/Logo";
import "./CarForm.css";
import { useSelector } from "react-redux";
import axios from "axios";
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

const CarForm = () => {
  const url = useSelector((state) => state.user.url);
  const [carModel, setCarModel] = useState("");
  const [locations, setLocations] = useState([]);
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [licensePlate, setLicensePlate] = useState("");
  const [rate, setRate] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSelectChange = (event) => {
    setCarModel(event.target.value);
  };
  useEffect(() => {
    axios
      .get(`${url}/api/v1/location/all-locations`)
      .then((response) => {
        console.log(response.data);
        setLocations(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const carObject = {
    model: carModel,
    year,
    color,
    numberPlate: licensePlate,
    rate,
    locationId: location,
  };

  const handleFormSubmit = () => {
    console.log(carObject);
    axios
      .post(`${url}/api/v1/cars/create-car`, carObject)
      .then((response) => {
        if(response.status === 201) {
            navigate('/admin');
        }
      })
      .catch((error) => {
        console.log(error);
      });
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
          <input
            type="text"
            value={year}
            onChange={(event) => {
              setYear(event.target.value);
            }}
          />
          <h2>Color</h2>
          <input
            type="text"
            value={color}
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
          <h2>License Plate</h2>
          <input
            type="text"
            value={licensePlate}
            onChange={(event) => {
              setLicensePlate(event.target.value);
            }}
          />
          <h2>Rate</h2>
          <input
            type="text"
            value={rate}
            onChange={(event) => {
              setRate(event.target.value);
            }}
          />
          <h2>Location</h2>
          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          >
            <option value="">Select a location...</option>
            {locations.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </div>
        <motion.button
          variants={heroVariants}
          animate="animate"
          initial="initial"
          whileHover={{
            boxShadow: "1rem 1rem 0 black",
            transition: { type: "spring", stiffness: 560, damping: 20 },
          }}
          className="login-btn car-btn"
          onClick={handleFormSubmit}
        >
          Continue
        </motion.button>
      </div>
    </div>
  );
};

export default CarForm;
