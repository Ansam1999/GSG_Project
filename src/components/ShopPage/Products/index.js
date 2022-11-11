import React, { useEffect, useState } from "react";
import ProductCard from "../../Shared/ProductCard";
import "./Styles.css";

const Products = ({ products, categoryToFilter }) => {
  console.log("ff", categoryToFilter);

  return (
    <div className="products">
      {products
        .filter((item) => {
          if (categoryToFilter) {
            if (item.category === categoryToFilter.category) {
              console.log(item);
              return item;
            }
          } else {
            return item;
          }
        })
        .map((item, index) => {
          return <ProductCard item={item} key1={index} />;
        })}
    </div>
  );
};

export default Products;
