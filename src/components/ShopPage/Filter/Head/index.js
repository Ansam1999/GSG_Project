import "./Styles.css";
import React from "react";

const Head = ({ setCategory }) => {
  return (
    <div className="head_filter">
      <p className="filter_title">Filters</p>
      <button className="reset" onClick={() => setCategory("")}>
        Reset
      </button>
    </div>
  );
};

export default Head;
