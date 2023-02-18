import React from "react";
import "./FirstPart.css";
import working from "../Img/working.png";

const FirstPart = () => {
  return (
    <div className="firstPart">
      <div className="container_part">
        <div className="container_text">
          <div className="big_text">Агрегатор учебных курсов</div>
          <div className="small_text">
            Сравниваем разные курсы по различным предметам. Мы — каталог-отзовик
            курсов. Выбирайте курсы по отзывам, цене, продолжительности и другим
            критериям!
          </div>
        </div>
        <div className="container_img">
          <img className="workingImg" src={working} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstPart;
