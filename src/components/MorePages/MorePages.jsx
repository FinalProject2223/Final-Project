import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./MorePages.css";
import Reating from "./Reating";

export default function MorePages() {
  const [data, setData] = useState(useLocation().state);
  
  console.log(data);
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div>
              <img className="img_more" src={data.img} alt="" />
            </div>
            <div className="center">
              <div className="pass">
                <div>
                  <img
                    className="img_card"
                    src={data.dataImg.img1}
                    alt=""
                  />
                </div>
                <div className="left_right">
                  <img
                    className="img_card"
                    src={data.dataImg.img2}
                    alt=""
                  />
                </div>
                <div>
                  {" "}
                  <img
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
                aperiam beatae dolorum porro labore totam maxime excepturi,
                facere illo, fugit architecto modi expedita atque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum ab neque eum est optio quasi totam natus sint minima.
                Repellendus ipsum harum obcaecati dolor nulla dolores laborum,
                ratione maxime commodi.
              </p>
            </p>
          </div>
        </div>
      </div>
      <div className="div2">
      <Reating/>  
      </div>
    </div>
  );
}
