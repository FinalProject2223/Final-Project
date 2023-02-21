import React from "react";
import { useSelector } from "react-redux";
// import { ToastContainer } from "react-toastify";
import Card from "./Card";
import "./comparepage.css";

const ComparePage = () => {
  const comparingList = useSelector(
    (state) => state.comparing.comparingCoursesList
  );

  if (comparingList.length === 0)
    return <h2 className="noCompare">Здесь нету курса для сравнения</h2>;

  return (
    <div className="root">
      {/* {Math.abs(comparingList[0].price - (comparingList[1]?.price || 0))}$ */}
      {comparingList.map((e) => (
        <Card key={e.id} data={e} />
      ))}
    </div>
  );
};

export default ComparePage;
