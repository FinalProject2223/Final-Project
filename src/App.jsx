import SecondPart from "./components/SecondPart/SecondPart";
import "./index.css";
import Home from "./screens/Home";
import All from './components/All';
import {  Route, Routes } from "react-router-dom";
import Course from "./screens/Course";
import Reviews from "./screens/Reviews";
import Feedback from "./screens/Feedback";
import Schools from "./screens/Schools";
import Cabinet from "./screens/Cabinet";
import Compare from "./screens/ComparePage/index";
import LoginPages from "./components/LoginPages/LoginPages";
import SingIn from "./components/SingIn/SingIn";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<All/>}>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/reviews" element={<Reviews/>}/>
        <Route path="/feedback" element={<Feedback />}/>
        <Route path="/schools" element={<Schools />}/>
        <Route path="/cabinet" element={<Cabinet />}/>
        </Route>
        <Route path="/LoginPages" element={<LoginPages />}/>
        <Route path="/SingInPages" element={<SingIn />}/>
      </Routes>
    </div>
  );
}

export default App;
