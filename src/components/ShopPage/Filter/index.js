import React, { useState } from "react";
import Head from "./Head";
import "./Styles.css";
import Category from "./Category";

const Filter = ({ categories, setCategory }) => {
  const [changed, setChanged] = useState(false);
  const filterProducts = (category, setPressed, pressed) => {
    setChanged(!changed);
    if (!pressed) {
      setPressed("orange");
      setCategory({ category });
    } else {
      setPressed("");
      setCategory("");
    }
  };
  const categoryArray = [...categories];

  return (
    <div className="filter_section">
      <Head setCategory={setCategory} />
      <hr className="line" />
      {categoryArray.map((category, index) => (
        <Category
          index={index}
          category={category}
          filterProducts={filterProducts}
        />
      ))}

      <hr className="line" />
    </div>
  );
};

export default Filter;
