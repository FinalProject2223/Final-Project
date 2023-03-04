import React from "react";
import "./CoursePart.scss";
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
  const [items, setItems] = useState([{
    "id": 1,
    "course": "Веб-разработчик",
    "academy": "Soff Study",
    "grade": 4.5,
    "price":4750 ,
    "time": "с 13:30 до 15:00",
    "duration": "6 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},
{
    "id": 2,
    "course": "Веб-разработчик",
    "academy": "IT Academy",
    "grade": 5.0,
    "price": 6200,
    "time": "с 18:30 до 20:00",
    "duration": "7 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},
{
    "id": 3,
    "course": "Английский язык",
    "academy": "Everest Education",
    "grade": 4.0,
    "price": 3590,
    "time": "с 16:00 до 17:30",
    "duration": "3 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},{
    "id": 4,
    "course": "Веб-разработчик",
    "academy": "Soff Study",
    "grade": 4.5,
    "price":4750,
    "time": "с 13:30 до 15:00",
    "duration": "6 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},
{
    "id": 5,
    "course": "Веб-разработчик",
    "academy": "IT Academy",
    "grade": 5.0,
    "price": 6200,
    "time": "с 18:30 до 20:00",
    "duration": "7 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},
{
    "id": 6,
    "course": "Английский язык",
    "academy": "Everest Education",
    "grade": 4.0,
    "price": 3590,
    "time": "с 16:00 до 17:30",
    "duration": "3 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},{
    "id": 7,
    "course": "Веб-разработчик",
    "academy": "Soff Study",
    "grade": 4.5,
    "price":4750,
    "time": "с 13:30 до 15:00",
    "duration": "6 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},
{
    "id": 8,
    "course": "Веб-разработчик",
    "academy": "IT Academy",
    "grade": 5.0,
    "price": 6200,
    "time": "с 18:30 до 20:00",
    "duration": "7 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},
{
    "id": 9,
    "course": "Английский язык",
    "academy": "Everest Education",
    "grade": 4.0,
    "price": 3590,
    "time": "с 16:00 до 17:30",
    "duration": "3 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},{
    "id": 10,
    "course": "Веб-разработчик",
    "academy": "Soff Study",
    "grade": 4.5,
    "price":4750,
    "time": "с 13:30 до 15:00",
    "duration": "6 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},
{
    "id": 11,
    "course": "Веб-разработчик",
    "academy": "IT Academy",
    "grade": 5.0,
    "price": 6200,
    "time": "с 18:30 до 20:00",
    "duration": "7 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},
{
    "id": 12,
    "course": "Английский язык",
    "academy": "Everest Education",
    "grade": 4.0,
    "price": 3590,
    "time": "с 16:00 до 17:30",
    "duration": "3 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},{
    "id": 13,
    "course": "Веб-разработчик",
    "academy": "Soff Study",
    "grade": 4.5,
    "price":4750,
    "time": "с 13:30 до 15:00",
    "duration": "6 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},
{
    "id": 14,
    "course": "Веб-разработчик",
    "academy": "IT Academy",
    "grade": 5.0,
    "price": 6200,
    "time": "с 18:30 до 20:00",
    "duration": "7 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
},
{
    "id": 15,
    "course": "Английский язык",
    "academy": "Everest Education",
    "grade": 4.0,
    "price": 3590,
    "time": "с 16:00 до 17:30",
    "duration": "3 месяца",
    "type": "Стажировка",
    "certificate": "Диплом"
}]);
  const [itemsPerPage] = useState(5);

  let courses = useSelector((state) => state.courses.coursesList);
  let loadingStatus = useSelector((state) => state.courses.loadingStatus);
  
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(coursesFetch());
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

      <div className="father_filter" id="#123">
        <button className="course-filter-button" onClick={()=>Webrazrabotka()}>Технологии</button>     
        <button className="course-filter-button">Маркетинг</button>
        <button className="course-filter-button">Дизайн</button> 
        <button className="course-filter-button">Математика</button>
        <button className="course-filter-button" onClick={()=>English()}>Иностранный язык</button>
        <button className="course-filter-button">Высшая наука</button>
        <button className="course-filter-button">Финансы</button>
      </div>

      </div>
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
