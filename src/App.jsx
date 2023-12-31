import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "./pages/Loader";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";


const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Loader />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
