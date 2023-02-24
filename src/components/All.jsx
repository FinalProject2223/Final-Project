import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";
import Home from "../screens/Home";
import Course from "../screens/Course";


export const All = () => {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

export default All;
