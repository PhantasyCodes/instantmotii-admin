import React from "react";
import Logo from "../components/Logo";
import "./AdminPage.css"
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
    const navigate = useNavigate();
  return (
    <div className="admin-page-container">
      <div className="logo">
        <Logo />
        <h1 className="title">InstantMotii</h1>
      </div>
        <div className="admin-page-box" onClick={() => {
            navigate("/map")
        }}>
            <h1>Add Vehicle Location</h1>
        </div>
        <div className="admin-page-box" onClick={() => {
            navigate("/create-car")
        }}>
            <h1>Add Vehicle</h1>
        </div>
    </div>
  );
};

export default AdminPage;
