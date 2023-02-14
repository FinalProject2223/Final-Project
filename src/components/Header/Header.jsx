import React from "react";
import "./Header.css";
import logoImg from "../Img/Logo.png";
import tradeImg from "../Img/trade.png";
import loupeImg from "../Img/loupe.png";

const Header = () => {
  return (
    <div className="header">
      <div className="menu_container">
        <div className="logo_box">
          <img className="logo_png" src={logoImg} alt="" />
        </div>
        <div className="li_box">
          <p>Курсы</p>
          <p>Школы</p>
          <p>Отзывы о школах</p>
          <p>Акции школ</p>
          <p>Блог</p>
        </div>
      </div>
      <div className="button_container">
        <img className="trade_img" src={tradeImg} alt="" />
      </div>
      <div className="search_container">
        <img className="loupe_img" src={loupeImg} alt="" />
        <input className="input_search" type="text" placeholder="Искать курсы" />
      </div>
    </div>
  );
};

export default Header;
