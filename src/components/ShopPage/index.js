import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Products from "./Products";
import "./Styles.css";
import axios from "axios";

const ShopPage = ({ products, sortOn }) => {
  const [displayCategory, setCategory] = useState("");

  const categories = new Set();

  products && products.map((item) => categories.add(item.category));
  sortOn && products.sort((a, b) => a.price - b.price);
  console.log(sortOn);
  return (
    <div className="shop_page">
      <Filter categories={categories} setCategory={setCategory} />
      <Products products={products} categoryToFilter={displayCategory} />
    </div>
  );
};

export default ShopPage;
