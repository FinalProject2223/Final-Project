import React from "react";
import "./FirstPart.css";
import working from "../Img/working.png";

const FirstPart = () => {
  return (
    <div className="firstPart">
      <div className="container_part">
        <div className="container_text">
          <p className="big_text">Агрегатор онлайн-курсов</p>
          <p className="small_text">
            Сравниваем онлайн-курсы по digital и IT. Мы — каталог-отзовик
            курсов. Выбирайте курсы по отзывам, цене, продолжительности и другим
            критериям!
          </p>
        </div>
        <div className="container_img">
          <img className="workingImg" src={working} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
