import React, { useEffect, useState } from "react";
import "./Styles.css";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Category = ({ index, category, filterProducts }) => {
  const [pressed, setPressed] = useState("");
  useEffect(() => {
    setPressed("");
  }, [index]);
  const filter = () => {
    filterProducts(category, setPressed, pressed);
  };
  return (
    <div key={index} className="category" onClick={() => filter()}>
      <p>{category}</p>
      <MdKeyboardArrowRight />
    </div>
  );
};

export default Category;
