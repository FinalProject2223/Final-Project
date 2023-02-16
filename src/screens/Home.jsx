import React from "react";
import FirstPart from "../components/FisrtPart/FirstPart";
import { Karusel } from "../components/Karusel/Karusel";
import SecondPart from "../components/SecondPart/SecondPart";
import CoursePart from "../components/CoursePart/CoursePart";

const Home = () => {
  return (
    <div className="home">
      <FirstPart />
      <SecondPart />
      <Karusel />
      <CoursePart />
    </div>
  );
};

export default Home;
