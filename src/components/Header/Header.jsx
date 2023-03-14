import React, { useState } from "react";
import logoImg from "../Img/mb-team_logo.png";
import tradeImg from "../Img/trade.png";
import tradeImg2 from "../Img/trade2.png";
import loupeImg from "../Img/loupe.png";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Header = () => {
  const [auth, setAuth] = useState(false);
  const naviget = useNavigate()

  const comparingList = useSelector(
    (state) => state.comparing.comparingCoursesList
  );

  let localstorage = JSON.parse(localStorage.getItem("User"));
  // const userAuth = useSelector((state) => state.auth.authList);

  const [homePages, setHomePages] = useState("Active");
  const [coursePages, setCoursePages] = useState("none");
  const [schoolsPages, setSchoolsPages] = useState("none");
  const [discountPages, setDiscountPages] = useState("none");
  const [blogPages, setBlogPages] = useState("none");
  const [izoPages, setIzoPages] = useState("none");
  const [profPages, setProfPages] = useState("none");

  function homeOn() {
    setHomePages("Active")
    setCoursePages("none")
    setSchoolsPages("none")
    setDiscountPages("none")
    setBlogPages("none")
    setIzoPages("none")
    setProfPages("none")
  }

  
  function noneOn2() {
    if(localstorage != null){
      setHomePages("none")
      setCoursePages("none")
      setSchoolsPages("none")
      setDiscountPages("none")
      setBlogPages("none")
      
      setIzoPages("Active")
      setProfPages("none")
      naviget("/compare")
    }
    else{
      toast.error("Сперва зарегистрируйтесь! 🕵️‍♀️")
    }

  }

  function noneOn() {
    setHomePages("none")
    setCoursePages("none")
    setSchoolsPages("none")
    setDiscountPages("none")
    setBlogPages("none")
    
    setIzoPages("none")
    setProfPages("none")
  }

  function courseOn() {
    setHomePages("none")
    setCoursePages("Active")
    setSchoolsPages("none")
    setDiscountPages("none")
    setBlogPages("none")
    
    setIzoPages("none")
    setProfPages("none")
  }

  function schoolsOn() {
    setHomePages("none")
    setCoursePages("none")
    setSchoolsPages("Active")
    setDiscountPages("none")
    setBlogPages("none")
    
    setIzoPages("none")
    setProfPages("none")
  }

  function discountOn() {
    setHomePages("none")
    setCoursePages("none")
    setSchoolsPages("none")
    setDiscountPages("Active")
    setBlogPages("none")
    
    setIzoPages("none")
    setProfPages("none")
  }
  function blogOn() {
    setHomePages("none")
    setCoursePages("none")
    setSchoolsPages("none")
    setDiscountPages("none")
    setBlogPages("Active")
    
    setIzoPages("none")
    setProfPages("none")
  }

  const keryka = () => {};

  return (
    <div className="header">
      <div className="menu_container">
        <div className="logo_box">
          <img className="logo_png" src={logoImg} alt="" />
          <b className="logo_name"> MBM-TEAM</b>
        </div>
        <div className="li_box">
          <Link onClick={homeOn} className={homePages == "Active" ? "p_text_active" : "p_text"} to="/">
            Главная
          </Link>
          <Link onClick={courseOn} className={coursePages == "Active" ? "p_text_active" : "p_text"} to="/course">
            Курсы
          </Link>
          <Link onClick={schoolsOn} className={schoolsPages == "Active" ? "p_text_active" : "p_text"} to="/schools">
            Школы
          </Link>
          <Link onClick={discountOn} className={discountPages == "Active" ? "p_text_active" : "p_text"} to="/feedback">
            Акции
          </Link>
          <Link onClick={blogOn} className={blogPages == "Active" ? "p_text_active" : "p_text"} to="/reviews">
            Блог
          </Link>
        </div>
      </div>
      <div className="button_container">
          <img onClick={noneOn2} className="trade_img" src={izoPages == "Active" ? tradeImg2 : tradeImg} alt="" />
          {comparingList.length === 0 ? (
            keryka()
          ) : (
            <span>{comparingList.length}</span>
          )}
      </div>
      <div className="search_container">
        <img className="loupe_img" src={loupeImg} alt="" />
        <input
          className="input_search"
          type="text"
          placeholder="Искать курсы"
        />
      </div>

      <div className="cnt_ath_btn">
        {localstorage ? (
          <Link onClick={noneOn} to={"/cabinet"}>
            <button className="auth_btn">Профиль</button>
          </Link>
        ) : (
          <Link onClick={noneOn} to={"/SingInPages"}>
            <button className="auth_btn">Вход</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
