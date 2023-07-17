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
import AdminPage from "./pages/AdminPage";
import CarForm from "./pages/CarForm";


const App = () => {
  const location = useLocation();
  return (
    <Provider store={store}>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Loader />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/create-location" element={<CreateLocationPage />} />
          <Route path="/create-car" element={<CarForm />} />
        </Routes>
      </AnimatePresence>
    </Provider>
  );
};

export default App;
