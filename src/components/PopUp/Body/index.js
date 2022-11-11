import "./Styles.css";

import React from "react";
import ProductInfo from "./ProductInof";

const Body = (props) => {
  return (
    <div className="popup_body">
      <ProductInfo {...props} />
      <button className="view_details">View Full product Details</button>
    </div>
  );
};

export default Body;
