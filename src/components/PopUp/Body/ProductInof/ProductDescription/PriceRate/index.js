import "./Styles.css";
import React from "react";

import Rate from "./Rate";

const PriceRate = (props) => {
  return (
    <div className="rate_price">
      <span className="price">SGD {props.price}</span>
      <Rate rate={props.rate} />
    </div>
  );
};

export default PriceRate;
