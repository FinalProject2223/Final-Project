import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MorePages.css";
import imgStar from "../Img/star.png"


export default function MorePages() {
  const [data, setData] = useState(useLocation().state);
  const [ImgVariable , setImgVariable] = useState(data.img)

  console.log(data);

  function Img1Variable() {
    setImgVariable(data.dataImg.img1)
  }

  
  function Img2Variable() {
    setImgVariable(data.dataImg.img2)
    
  }

  
  function Img3Variable() {
    setImgVariable(data.dataImg.img3)
  }
  function Img0Variable() {
    setImgVariable(data.img)
    
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>
              <img className="img_more" src={ImgVariable} alt="" />
            </div>
            <div className="center">
              <div className="pass">
              <div className="left_right">
                  <img
                  onClick={Img0Variable}
                    className="img_card"
                    src={data.img}
                    alt=""
                  />
                </div>
                <div>
                  <img
                  onClick={Img1Variable}
                    className="img_card"
                    src={data.dataImg.img1}
                    alt=""
                  />
                </div>
                <div className="left_right">
                  <img
                  onClick={Img2Variable}
                    className="img_card"
                    src={data.dataImg.img2}
                    alt=""
                  />
                </div>
                <div>
                  {""}
                  <img
                  onClick={Img3Variable}
                    className="img_card"
                    src={data.dataImg.img3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-5">
            <h1 className="academy mt-5">{data.academy}</h1>
            <p className="categoria">Оценка:  <img src={imgStar} alt="" /> {data.grade}</p>
            <p className="categoria">Курс: {data.course}</p>
            <p className="categoria">Цена: {data.price}</p>
            <p className="categoria">Время: {data.time}</p>
            <p className="categoria">Длительность: {data.duration}</p>
            <p className="categoria">Получите: {data.certificate}</p>
            <p className="categoria">
              <div className="title">Описания:</div>
              <p>
                
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem consequuntur vitae doloribus odio necessitatibus nam
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum ab neque eum est optio quasi totam natus sint 
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}