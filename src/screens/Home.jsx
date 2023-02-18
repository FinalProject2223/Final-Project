import React from "react";
import FirstPart from "../components/FisrtPart/FirstPart";
import { Karusel } from "../components/Karusel/Karusel";
import SecondPart from "../components/SecondPart/SecondPart";

const Home = () => {
  return (
    <div className="home">
      <FirstPart />
      <SecondPart />
      <Karusel />
    </div>
  );
};

export default Home;
