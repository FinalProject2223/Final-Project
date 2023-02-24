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
  // const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [itemsPerPage] = useState(6);

  let courses = useSelector((state) => state.courses.coursesList);
  let loadingStatus = useSelector((state) => state.courses.loadingStatus);
  
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coursesFetch());

    setItems(courses)
    console.log(courses , '=>courses');
  }, []);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;


  const currentItems = items.slice(firstItemIndex, lastItemIndex);
  console.log(currentItems);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // const nextPage = () => setCurrentPage((prev) => prev + 1);


  // const prevPage = () => setCurrentPage((prev) => prev - 1);
  
  
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
          data={courses[id - 1]}
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
    
    let yengi




 

    const Webrazrabotka = () => {
     yengi = courses.filter(v=>{
       return v.course == "Веб-разработчик"
      })

      setItems(yengi)
      
      // console.log(yengi);
    }

    function English() {
      yengi = courses.filter(v=>{
        return v.course == "Английский язык"
       })
 
       setItems(yengi)
    }
   


  return (
    <div>
      <div className="middle">

      <div className="father_filter">
        <button onClick={()=>Webrazrabotka()}>Веб-разработчик</button>     
        <button>Маркетинг</button>
        <button>Дизайн</button> 
        <button>Математика</button>
        <button onClick={()=>English()}>Иностранный язык</button>
        <button>Высшая наука</button>
        <button>Финансы</button>
      </div>

      </div>
      <div className="slider_text course_top_text">Популярные курсы</div>
      <div className="courses_container">
        <div className="courses">
          {loadingStatus === "loading" ? (<Preloader />) : loadingStatus === "error" ? (<div className="another">Error sending request</div>) : courses.length === 0 ? (<div className="another">No course</div>) : (displayCourses())}
        </div>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={courses.length}
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
