import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MorePages.css";
import imgStar from "../Img/star.png";
import Reting from "./Reting/Reting";

export default function MorePages() {
  const [data, setData] = useState(useLocation().state);
  const [ImgVariable, setImgVariable] = useState(data.img);

  console.log(data);

  function Img1Variable() {
    setImgVariable(data.dataImg.img1);
  }

  function Img2Variable() {
    setImgVariable(data.dataImg.img2);
  }

  function Img3Variable() {
    setImgVariable(data.dataImg.img3);
  }
  function Img0Variable() {
    setImgVariable(data.img);
  }

  return (
    <div>
      <div className="rowwow">
        <div className="cl6">
          <div>
            <img className="img_more" src={ImgVariable} alt="" />
          </div>
          <div className="box_imges">
            <img
              onClick={Img0Variable}
              className="img_card"
              src={data.img}
              alt=""
            />
            <img
              onClick={Img1Variable}
              className="img_card"
              src={data.dataImg.img1}
              alt=""
            />
            <img
              onClick={Img2Variable}
              className="img_card"
              src={data.dataImg.img2}
              alt=""
            />
            <img
              onClick={Img3Variable}
              className="img_card"
              src={data.dataImg.img3}
              alt=""
            />
          </div>
        </div>
        <div className="cl5">
          <h1 className="academy mt-5">{data.academy} </h1>
          <p className="categoria">
            {" "}
            <Reting />
          </p>
          <p className="categoria">Курс: {data.course}</p>
          <p className="categoria">Цена: {data.price}</p>
          <p className="categoria">Время: {data.time}</p>
          <p className="categoria">Длительность: {data.duration}</p>
          <p className="categoria">Получите: {data.certificate}</p>
          <p className="categoria">
            <div className="title">Описания:</div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              excepturi totam accusantium fugit! Iusto porro magnam laboriosam
              laudantium dolorem fugiat veritatis quisquam vel nostrum rerum,
              eveniet sit dolores numquam consectetur!
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
