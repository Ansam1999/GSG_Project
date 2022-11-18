import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../../Shared/ProductCard";
import { LoadingProducts } from "./loadingProducts.js";
import "./Styles.css";
import useLazyLoad from "./useLazyLoad";

const Products = ({ products, categoryToFilter }) => {
  const NUM_PER_Load = 4;
  const total = products.length;
  console.log("ff", categoryToFilter);
  const triggerRef = useRef(null);
  const onGrabData = (index) => {
    // This would be where you'll call your API
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = products.slice(index, index * NUM_PER_Load);
        console.log("dd", data);
        resolve(data);
      }, 1000);
    });
  };
  const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
  return (
    <>
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
            return (
              <ProductCard item={item} key1={index} allProducts={products} />
            );
          })}{" "}
        <div
          ref={triggerRef}
          className={clsx("trigger", "loading", { visible: loading })}
        >
          <LoadingProducts />
        </div>
      </div>
    </>
  );
};

export default Products;
