import React from "react";
import "./Styles.css";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
const Sort = ({ products, handleSort }) => {
  const Sorting = (e) => {
    console.log("priceee");
    let sortOn = e.target.value;

    handleSort(sortOn);
  };
  return (
    <div className="sorting">
      <p className="sort_title">Sort By</p>

      <select id="select_sort" className="select_to_sort" onChange={Sorting}>
        <option value="" disabled selected>
          Selected
        </option>
        <option value="price">Price</option>
      </select>
    </div>
  );
};

export default Sort;
