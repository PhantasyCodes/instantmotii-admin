import React, { useEffect } from "react";
import Logo from "../components/Logo";
import "./AdminPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const AdminPage = () => {
  const url = useSelector((state) => state.user.url);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${url}/api/v1/location/all-locations`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  return (
    <div className="admin-page-container">
      <div className="logo">
        <Logo />
        <h1 className="title">InstantMotii</h1>
      </div>
      <div
        className="admin-page-box"
        onClick={() => {
          navigate("/map");
        }}
      >
        <h1>Add Vehicle Location</h1>
      </div>
      <div
        className="admin-page-box"
        onClick={() => {
          navigate("/create-car");
        }}
      >
        <h1>Add Vehicle</h1>
      </div>
    </div>
  );
};

export default AdminPage;
