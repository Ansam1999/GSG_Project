import React, { useState } from "react";
import "./Styles.css";
import Sort from "./Sort";
const SortBar = ({ products, setSort }) => {
  return (
    <div className="sort_bar">
      <p className="women_title">Women</p>
      <Sort products={products} handleSort={setSort} />
    </div>
  );
};

export default SortBar;
