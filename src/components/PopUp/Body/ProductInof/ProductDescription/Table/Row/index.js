import React from "react";
import "./Styles.css";
const Row = ({ col1, col2, key1 }) => {
  return (
    <>
      <div key={key1} className="table_row">
        <p className="col1">{col1}</p>
        <p className="col2">{col2}</p>
      </div>
      <hr color="#F9F8F6" width="100%" />
    </>
  );
};

export default Row;
