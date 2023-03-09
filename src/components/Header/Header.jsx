import React from "react";
import logoImg from "../Img/mb-team_logo.png";
import tradeImg from "../Img/trade.png";
import loupeImg from "../Img/loupe.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const comparingList = useSelector(
		(state) => state.comparing.comparingCoursesList
	);

  const keryka = () => {
    console.log(":)");
  }

  return (
    <div className="header">
      <div className="menu_container">
        <div className="logo_box">
          <img className="logo_png" src={logoImg} alt="" />
          <b className="logo_name"> MBM-TEAM</b>
        </div>
        <div className="li_box">
          <Link className="p_text" to="/">
            Главная
          </Link>
          <Link className="p_text" to="/course">
            Курсы
          </Link>
          <Link className="p_text" to="/previews">
            Обзоры
          </Link>
          <Link className="p_text" to="/schools">
            Школы
          </Link>
          <Link className="p_text" to="/feedback">
            Отзывы
          </Link>
        </div>
      </div>
      <div className="button_container">
        <Link to="/compare"> 
        <img className="trade_img" src={tradeImg} alt="" />
        { comparingList.length === 0 ? (keryka()) : (<span>{comparingList.length}</span>)}
        </Link>
      </div>
      <div className="search_container">
        <img className="loupe_img" src={loupeImg} alt="" />
          <input
            className="input_search"
            type="text"
            placeholder="Искать курсы"
          />
      </div>
      <Link to={"/SingInPages"}><h1 className="mt-1">SingIn</h1></Link>
    </div>
  );
};

export default Header;
