import SecondPart from "./components/SecondPart/SecondPart";
import "./index.css";
import Home from "./screens/Home";
import All from './components/All';
import {  Route, Routes } from "react-router-dom";
import Course from "./screens/Course";
import Compare from "./screens/ComparePage/index";
import LoginPages from "./components/LoginPages/LoginPages";
import SingIn from "./components/SingIn/SingIn";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<All/>}>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/compare" element={<Compare />} />
        </Route>
        <Route path="/LoginPages" element={<LoginPages />}/>
        <Route path="/SingInPages" element={<SingIn />}/>
      </Routes>
    </div>
  );
}

export default App;
