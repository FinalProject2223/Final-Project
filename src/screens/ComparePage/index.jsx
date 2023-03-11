import React from "react";
import { useSelector } from "react-redux";
// import { ToastContainer } from "react-toastify";
import Card from "./Card";
import "./comparepage.css";

import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import img from "../../components/Img/star.png";
import imgtime from "../../components/Img/time.png";
import { useNavigate } from "react-router-dom";

import Preloader from "../../components/Preloader/index";

const ComparePage = () => {
  const [Data, setData] = useState([]);
  const [Data2, setData2] = useState([]);

  const navigate = useNavigate();

  function More(params) {
    navigate(`/More/${params.id}`, {
      state: params,
    });
  }
  

      
    return (
      <div className="root" >
        <button >Fav</button>
      <div className="courses_container">
        <div className="courses">
          {Data.length > 0 ? (
            <>
              {Data.map((arr, i) => {
                return (
                  <div>
                    <div className="course">
                      <div className="course_container">
                        <div className="course_box b1">
                          <img className="course_name" src={arr.img} alt="" />
                        </div>
                        <div className="course_box b2">
                          <div className="academy_container">
                            <div className="academy_name">{arr.course}</div>
                          </div>
                        </div>
                        <div className="course_box b4">
                          <div className="course_time">
                            {arr.academy} <br />
                            <br />
                            <img src={img} alt="" />
                            {arr.grade}
                          </div>
                        </div>
                        <div className="course_box b3">
                          <div className="course_price">{arr.price} сум</div>
                        </div>
                        <div className="course_box b3">
                          <div className="course_time">
                            {arr.time} <br />
                            <img
                              style={{ width: "20px", height: "20px" }}
                              src={imgtime}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="course_box buttons">
                          <button className="course_button cb1" type="button">
                            На сайт школы
                          </button>
                          <button
                            className="course_button cb2"
                            onClick={() => {
                              More(arr);
                            }}
                            type="button"
                          >
                            Подробнее
                          </button>
                          <button className="course_button cb3" type="button">
                            Добавить в избранные
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <h>
                <Preloader />
                Error
              </h>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparePage;
