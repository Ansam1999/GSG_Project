import React from "react";
import Content from "./Content";
import "./Styles.css";
const FixedCover = () => {
  return (
    <div className="fixed_cover">
      <Content />
      <img src="assets/img6.png" className="img_fixed" width="200px" />
    </div>
  );
};

export default FixedCover;
