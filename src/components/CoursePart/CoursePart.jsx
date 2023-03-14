import React from "react";
import "./CoursePart.css";
import img from "../Img/star.png";
import imgtime from "../Img/time.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { coursesFetch } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Preloader from "../Preloader/index";
import { toast } from "react-toastify";

const CoursePart = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [coursesPerPage] = useState(4);
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.auth);

  const [Data, setData] = useState([]);
  const [Data2, setData2] = useState([]);

  const lastCourseIndex = currentPage * coursesPerPage;
  const firstCourseIndex = lastCourseIndex - coursesPerPage;
  const currentCourse = Data2.slice(firstCourseIndex, lastCourseIndex);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const navigate = useNavigate();

  const [allPages, setAllPages] = useState("Active");
  const [webPages, setWebPages] = useState("none");
  const [designPages, setDesignPages] = useState("none");
  const [foreignPages, setForeignPages] = useState("none");
  const [hardPages, setHardPages] = useState("none");
  const [otherPages, setOtherPages] = useState("none");

  
  
  useEffect(() => {
    axios
      .get("https://api.npoint.io/f62bee9ee0f889870333")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setData2(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function Web() {
    let categoriya = Data2.filter((res) => {
      return res.categoriya === "Web-design";
    });
    console.log(categoriya);
    setData(categoriya);
    setAllPages("none")
    setWebPages("Active")
    setDesignPages("none")
    setForeignPages("none")
    setHardPages("none")
    setOtherPages("none")
  }
  function All() {
    let categoriya = Data2;
    console.log(categoriya);
    setData(categoriya);
    setAllPages("Active")
    setWebPages("none")
    setDesignPages("none")
    setForeignPages("none")
    setHardPages("none")
    setOtherPages("none")
  }

  function Inostrani() {
    let categoriya = Data2.filter((res) => {
      return res.categoriya === "foreign language";
    });
    console.log(categoriya);
    setData(categoriya);
    setAllPages("none")
    setWebPages("none")
    setDesignPages("none")
    setForeignPages("Active")
    setHardPages("none")
    setOtherPages("none")
  }
  function HardPhy() {
    let categoriya = Data2.filter((res) => {
      return res.categoriya === "higher-science";
    });
    console.log(categoriya);
    setData(categoriya);
    setAllPages("none")
    setWebPages("none")
    setDesignPages("none")
    setForeignPages("none")
    setHardPages("Active")
    setOtherPages("none")
  }
  function otherCrs() {
    let categoriya = Data2.filter((res) => {
      return res.categoriya === "other";
    });
    console.log(categoriya);
    setData(categoriya);
    setAllPages("none")
    setWebPages("none")
    setDesignPages("none")
    setForeignPages("none")
    setHardPages("none")
    setOtherPages("Active")
  }

  function GrafichiskiyDizayn() {
    let categoriya = Data2.filter((res) => {
      return res.categoriya === "graphic-design";
    });
    console.log(categoriya);
    setData(categoriya);
    setAllPages("none")
    setWebPages("none")
    setDesignPages("Active")
    setForeignPages("none")
    setHardPages("none")
    setOtherPages("none")
  }

  function More(params) {
    navigate(`/More/${params.id}`, {
      state: params,
    });
  }

  let Izo = [];

  function Izobraniya(params) {
    // dispatch({type:"IZOBRANIYA" , peolad:{...params}})

    console.log(Izo, "=>Yashqardan");

    axios
      .get(
        `https://63905b3f65ff41831110b776.mockapi.io/api/users/${selector.id}`
      )
      .then((res) => {
        console.log(res.data);
        let Data = res.data.DataFavorites.find((item) => {
          return item.id == params.id;
        });
        Izo = res.data.DataFavorites;
        if (Data) {
          toast.error("Уже добавлен в избранные");
        } else {
          Izo.push(params);
          axios
            .put(
              `https://63905b3f65ff41831110b776.mockapi.io/api/users/${selector.id}`,
              {
                DataFavorites: Izo,
              }
            )
            .then((res) => {
              console.log(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
          toast.success("Добавлено в избранные");
        }
      });
  }

  return (
    <div>
      <div className="middle">
        <div className="father_filter" id="#123">
          <button className={allPages == "Active" ? "course-filter-button_active" : "course-filter-button"} onClick={All} >
            Все
          </button>
          <button className={webPages == "Active" ? "course-filter-button_active" : "course-filter-button"} onClick={Web}>
            Программирование
          </button>
          <button className={designPages == "Active" ? "course-filter-button_active" : "course-filter-button"} onClick={GrafichiskiyDizayn}>
            Дизайн
          </button>
          <button className={hardPages == "Active" ? "course-filter-button_active" : "course-filter-button"} onClick={HardPhy}>
            Точная наука
          </button>
          <button className={foreignPages == "Active" ? "course-filter-button_active" : "course-filter-button"} onClick={Inostrani}>
            Иностранный язык
          </button>
          <button className={otherPages == "Active" ? "course-filter-button_active" : "course-filter-button"} onClick={otherCrs}>
            Другое
          </button>
        </div>
      </div>
      <div className="courses_container">
        <div className="courses">
          {Data.length > 0 ? (
            <>
              {Data.map((arr, i) => {
                return (
                  <div key={arr.id}>
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
                          <button
                            onClick={() => {
                              Izobraniya(arr);
                            }}
                            className="course_button cb3"
                            type="button"
                          >
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
              </h>
            </>
          )}
        </div>
      </div>
      <Pagination
        coursesPerPage={coursesPerPage}
        totalItems={Data2.length}
        paginate={paginate}
      />
    </div>
  );
};

export default CoursePart;
