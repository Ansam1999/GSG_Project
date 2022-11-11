import React from "react";
import "./Styles.css";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
const Sort = () => {
  return (
    <div className="sorting">
      <p className="sort_title">Sort By</p>

      <select id="select" className="select_to_sort">
        <option value="volvo">Price</option>
      </select>
    </div>
  );
};

export default Sort;
