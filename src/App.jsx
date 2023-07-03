import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Test from "./pages/Test";
import { AnimatePresence } from "framer-motion";
import SecondTest from "./pages/SecondTest";

const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Test />} />
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<SecondTest />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
