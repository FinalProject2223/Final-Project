import SecondPart from "./components/SecondPart/SecondPart";
import "./index.css";
import Home from "./screens/Home";
import All from './components/All';
import {  Route, Routes } from "react-router-dom";
import Course from "./screens/Course";
import Compare from "./screens/ComparePage/index";


function App() {

  return (
    <div className="App">
      <All>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
     
      </All>
    </div>
  );
}

export default App;
