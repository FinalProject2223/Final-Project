import React from "react";
import "./Pagination.css";

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  nextPage,
  prevPage,
}) => {
  const pageNumbers = [];

  for (let i =1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <ul className="pagination">
        

        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <a className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default Pagination;
