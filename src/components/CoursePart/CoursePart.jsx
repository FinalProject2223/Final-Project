import React from "react";
import "./CoursePart.css";
import Course from "./Course/Course";
import Preloader from "../Preloader/index";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coursesFetch } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import axios from "axios";

const CoursePart = () => {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const courses = useSelector((state) => state.courses.coursesList);
  const loadingStatus = useSelector((state) => state.courses.loadingStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coursesFetch());
  }, []);

  useEffect(() => {
    const getCourses = async () => {
      setLoading(true);
      const res = await axios.get("http://localhost:3001/courses");
      setCourse(res.data);
      setLoading(false);
    };

    getCourses();
  }, []);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = course.slice(firstItemIndex, lastItemIndex);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage((prev) => prev + 1);

  const prevPage = () => setCurrentPage((prev) => prev - 1);

  const displayCourses = () =>
    currentItems.map(
      ({
        id,
        course,
        academy,
        grade,
        price,
        time,
        duration,
        type,
        certificate,
      }) => (
        <Course
          key={id}
          course={course}
          academy={academy}
          grade={grade}
          price={price}
          time={time}
          duration={duration}
          type={type}
          certificate={certificate}
        />
      )
    );

  return (
    <div>
      <div className="slider_text course_top_text">Популярные курсы</div>
      <div className="courses_container">
        <div className="courses">
          {/* <Course
            course="Front-end"
            academy="Adeynchik"
            grade="5.0"
            price="900.000"
            time="15:00 - 19:00"
            duration="6 monhts"
            type="staji"
            certificate="diplom"
          /> */}

          {loadingStatus === "loading" ? (
            <Preloader />
          ) : loadingStatus === "error" ? (
            <div className="another">Error sending request</div>
          ) : courses.length === 0 ? (
            <div className="another">No course</div>
          ) : (
            displayCourses()
          )}
        </div>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={course.length}
        paginate={paginate}
      />
      
      {/* <button className="btn btn-primary" onClick={() => prevPage}>
        Prev Page
      </button>
      <button className="btn btn-primary ms-2" onClick={() => nextPage}>
        Next Page
      </button> */}

    </div>
  );
};

export default CoursePart;
