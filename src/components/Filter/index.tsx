import React from "react";
import "./style.css";
import Select from "../Select";

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
        <Select title="All" choices={["Video", "Channel", "Playlist"]} />
        <Select
          title="Any time"
          choices={["Last day", "last month", "Last year"]}
        />
      </div>
    </>
  );
};

export default Filter;
