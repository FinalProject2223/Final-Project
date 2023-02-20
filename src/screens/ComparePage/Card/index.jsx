import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCourseFromCompare } from "../../../redux/actions";
// import { toast } from "react-toastify";
import "./card.css";
import calendar from "../../../components/Img/calendar.png";
import time from "../../../components/Img/time.png";
import star from "../../../components/Img/star.png";
import suitcase from "../../../components/Img/suitcase.png";
import cert from "../../../components/Img/certificate.png";

const Card = ({ data }) => {
  const comparingList = useSelector(
    (state) => state.comparing.comparingCoursesList
  );
  const dispatch = useDispatch();

  const removeFromComparing = () => {
    const deletedData = comparingList.filter((e) => e.id !== data.id);
    dispatch(removeCourseFromCompare(deletedData));
    // toast.success("Успешно удалено", { theme: "dark" });
  };

  return (
    <div className="card_comp">
      <div className="container_comp">
        <div className="content">
          <div className="datiki">{data.course}</div>
          <div className="datiki">{data.academy}</div>
          <div className="datiki">
            <img src={star} alt="" />
            {data.grade}
          </div>
          <div className="datiki">{data.time}</div>
          <div className="datiki">
            <img src={time} alt="" />
            {data.duration}
          </div>
          <div className="datiki">
            <img src={suitcase} alt="" />
            {data.type}
          </div>
          <div className="datiki">
            <img src={cert} alt="" />
            {data.certificate}
          </div>
          <div className="datiki">{data.price}</div>
        </div>
        <div className="batik">
          <button className="butichk" onClick={removeFromComparing}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
