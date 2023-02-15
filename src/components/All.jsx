import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Course from "../screens/Course";

export const All = ({ children }) => {
  return (
    <div>
      <Header />
     
      {children}
      <Footer />
    </div>
  );
};

export default All;
