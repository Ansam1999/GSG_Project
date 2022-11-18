import "./Styles.css";
import React from "react";
import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";

const ProductInfo = (props) => {
  console.log("info", props);
  return (
    <div className="popup_info">
      <ProductImages images={props.image} />
      <ProductDescription data={props} />
    </div>
  );
};

export default ProductInfo;
