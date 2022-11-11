import "./Styles.css";
import React from "react";
import Row from "./Row";
const Table = () => {
  const tableContent = [
    {
      col1: "Artisan Employment",
      col2: "54 jobs",
    },
    {
      col1: "Partnership",
      col2: "Randall Armstrong",
    },
    {
      col1: "In Collab",
      col2: "Augusta Mendoza",
    },
  ];
  return (
    <div className="table">
      {tableContent.map((item, index) => {
        return (
          <>
            <Row key1={index} col1={item.col1} col2={item.col2} />
          </>
        );
      })}
    </div>
  );
};

export default Table;
