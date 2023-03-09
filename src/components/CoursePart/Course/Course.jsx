import React from "react";
import "./Course.css";
import { useDispatch, useSelector } from "react-redux";
import star from "../../Img/star.png";
import timchik from "../../Img/time.png";
import calendar from "../../Img/calendar.png";
import certificatchik from "../../Img/certificate.png";
import suitcase from "../../Img/suitcase.png";
import { addCourseToCompare } from "../../../redux/actions";

const Course = ( { data, course, academy, grade, price, time, duration, type, certificate} ) => {

  const dispatch = useDispatch();
	const comparingList = useSelector((state) => state.comparing.comparingCoursesList);

  const addToCompare = (card) => {
    switch (comparingList.length) {
			case 0:
			case 1:
				if (comparingList[0]?.id === data.id) {
					alert("Выберите другой товар.");
					return;
				}
				alert("Успешно добавлено.");
				dispatch(addCourseToCompare(card));
				// localStorage.setItem(
				// 	"compare",
				// 	JSON.stringify([...JSON.parse(localStorage.getItem("compare")), card])
				// );
				break;
			case 2:
				alert("Максимальное колличество достигнуто.");
				break;
		}
	};

  return (
    <div className="course">
      <div className="course_container">
        <div className="course_box b1">
          <div className="course_name">{course}</div>
        </div>
        <div className="course_box b2">
          <div className="academy_container">
            <div className="academy_name">{academy}</div>
            <div className="academy_grade">
              <img className="grade_star" src={star} alt="" />{grade}
            </div>
          </div>
        </div>
        <div className="course_box b3">
          <div className="course_price">{price} сум</div>
        </div>
        <div className="course_box b4">
          <div className="course_time">
            <img className="time_img" src={timchik} alt="" /> {time}
          </div>
        </div>
        <div className="course_box b5">
          <div className="details">
            <div className="imgs">
              <div className="img_long">
                <img src={calendar} alt="" />
              </div>
              <div className="img_type">
                <img src={suitcase} alt="" />
              </div>
              <div className="img_cert"></div>
              <img src={certificatchik} alt="" />
            </div>
            <div className="detalyi">
              <div className="course_long">{duration}</div>
              <div className="course_type">{type}</div>
              <div className="course_certificate">{certificate}</div>
            </div>
          </div>
        </div>
        <div className="course_box buttons">
          <button className="course_button cb1" type="button">
            На сайт курса
          </button>
          <button className="course_button cb2" type="button">
            Подробнее
          </button>
          <button onClick={() => addToCompare(data)} className="course_button cb3" type="button">
            Добавить к сравнению
          </button>
        </div>
      </div>
    </div>
  );
};

export default Course;
