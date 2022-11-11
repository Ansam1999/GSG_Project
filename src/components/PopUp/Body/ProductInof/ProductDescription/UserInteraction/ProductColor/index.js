import "./Styles.css";
import React from "react";

const ProductColor = ({ colors }) => {
  return (
    <div className="color_section">
      <p className="color_title">Color</p>
      <div className="product_colors">
        {colors.map((color, index) => {
          return (
            <div
              className="color"
              style={{ backgroundColor: `${color}` }}
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductColor;
