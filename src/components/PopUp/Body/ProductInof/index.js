import "./Styles.css";
import React from "react";
import ProductImages from "./ProductImages";
import ProductDescription from "./ProductDescription";

const ProductInfo = (props) => {
  return (
    <div className="popup_info">
      <ProductImages images={props.images} />
      <ProductDescription data={props} />
    </div>
  );
};

export default ProductInfo;
