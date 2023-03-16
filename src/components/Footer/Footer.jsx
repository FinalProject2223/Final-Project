import React from "react";
import "./Footer.css";
import { AiOutlineInstagram } from "react-icons/ai";
import { RiFacebookCircleLine} from "react-icons/ri";
import { RiTelegramLine} from "react-icons/ri";


import logoImg from "../Img/mb-team_logo.png";

const Footer = () => {
  return (
    <div className="Footer__Parent">
      <div className="Footer">
        <div className="container2">
          <div className="roww">
            <div className="col-3">
              <div className="father_categorias">
                <p className="glav_p">Категории</p>
                <p className="footer_categoria">Программирования</p>
                <p className="footer_categoria">Дизайн</p>
                <p className="footer_categoria">Высшая наука</p>
                <p className="footer_categoria">Иностранный язык</p>
                <p className="footer_categoria">Другое</p>
              </div>
            </div>
            <div className="col-3">
              <div className="about_us">
                <div className="title_text_us">
                  <p>Контакты</p>
                  <div className="div_divchik">+998 (99) 988 88 98</div>
                  <div className="div_divchik">+998 (99) 433 43 43</div>
                </div>
              </div>
              <div className="subscribe_us">
                <p>Наши соц.сети</p>
                 <div className="social_icons">
                 <AiOutlineInstagram className="inst"/>
                    <RiFacebookCircleLine className="inst"/>
                    <RiTelegramLine className="inst"/>
                  </div>   
              </div>
            </div>
            <div className="col-5">
              <div className="title_text_us tts">
                <p>Написать нам</p>
                <div className="form_div">
                  <textarea className="input_text1"  id="" cols="30" rows="10" placeholder="Ваше сообщения..."></textarea>
                  <input className="input_text2" type="text" placeholder="Введите ваше имя..."/>
                    <input className="input_text3" type="text" placeholder="Введите ваш телефон или e-mail"/>
                    <button className="button_us">Отправить</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer2">
        <div className="container mt-2">
          <div className=" border_bor">
            <div className="">
              <div className="Footer_bootom">
                <img className="logo_foot" src={logoImg} alt="" />
                <p className="mt-2">© 2023. MBM-TEAM. Все права защищены</p>
              </div>
            </div>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
