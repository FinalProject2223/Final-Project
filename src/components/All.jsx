import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Course from "../screens/Course";

export const All = ({ children }) => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
      </Routes>
      {children}
      <Footer />
    </div>
  );
};

export default All;
