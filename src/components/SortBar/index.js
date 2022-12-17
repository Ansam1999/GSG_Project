import React, { useContext, useState } from "react";
import "./Styles.css";
import Sort from "./Sort";
import { productsContext } from "../../context/productsContext";
const SortBar = ({ setSort }) => {
  const products = useContext(productsContext);

  return (
    <div className="sort_bar">
      <p className="women_title">Women</p>
      <Sort products={products} handleSort={setSort} />
    </div>
  );
};

export default SortBar;
