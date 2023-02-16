import React from "react";
import "./CoursePart.css";
import Course from "./Course/Course";
import Preloader from "../Preloader/index";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { coursesFetch } from "../../redux/actions";

const CoursePart = () => {
    
	const courses = useSelector((state) => state.courses.coursesList);
	const loadingStatus = useSelector((state) => state.courses.loadingStatus);

    
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(coursesFetch());
	}, []);

    const displayCourses = () =>
		courses.map(({ course, academy, grade, price, time, duration, type, certificate }) => (
			<Course
            course={course}
            academy={academy}
            grade={grade}
            price={price}
            time={time}
            duration={duration}
            type={type}
            certificate={certificate}
			/>
		));

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
    </div>
  );
};

export default CoursePart;
