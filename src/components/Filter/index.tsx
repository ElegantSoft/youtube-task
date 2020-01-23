import React from "react";
import "./style.css";

const Filter: React.FC = () => {
  return (
    <>
      <div className="filter-web">
        <h3>About 13,000,000 filtered results</h3>
        <p>
          <i className="material-icons">filter_list</i>FILTER
        </p>
      </div>
      <div className="filter-mobile">
        <p>mobile</p>
      </div>
    </>
  );
};

export default Filter;
