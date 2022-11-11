import "./Styles.css";
import React from "react";

const BigImage = (props) => {
  return <img className="big_image" src={props.image} />;
};

export default BigImage;
