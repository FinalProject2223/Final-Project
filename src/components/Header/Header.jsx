import React from "react";
import logoImg from "../Img/mb-team_logo.png";
import tradeImg from "../Img/trade.png";
import loupeImg from "../Img/loupe.png";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="menu_container">
        <div className="logo_box">
          <img className="logo_png" src={logoImg} alt="" />
          <b className="logo_name"> MB-TEAM</b>
        </div>
        <div className="li_box">
          <Link className="p_text" to="/">
            Главная
          </Link>
          <Link className="p_text" to="/course">
            Курсы
          </Link>
          <Link className="p_text" to="/previews">Обзоры</Link>
          <Link className="p_text" to="/schools">Школы</Link>
          <Link className="p_text" to="/fitback">Отзывы</Link>
        </div>
      </div>
      <div className="button_container">
        <img className="trade_img" src={tradeImg} alt="" />
      </div>
      <div className="search_container">
        <img className="loupe_img" src={loupeImg} alt="" />
        <input
          className="input_search"
          type="text"
          placeholder="Искать курсы"
        />
      </div>
    </div>
  );
};

export default Header;
