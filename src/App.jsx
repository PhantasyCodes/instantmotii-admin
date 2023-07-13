import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Loader from "./pages/Loader";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import LocationForm from "./pages/LocationForm";
import { Provider } from "react-redux";
import store from "./store";
import CreateLocationPage from "./pages/CreateLocationPage";


const App = () => {
  const location = useLocation();
  return (
    <Provider store={store}>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Loader />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/create-location" element={<CreateLocationPage />} />
        </Routes>
      </AnimatePresence>
    </Provider>
  );
};

export default App;
