import React, { useContext, useEffect, useState } from "react";
import Filter from "./Filter";
import Products from "./Products";
import "./Styles.css";
import axios from "axios";
import { productsContext } from "../../context/productsContext";

const ShopPage = ({ sortOn }) => {
  const [displayCategory, setCategory] = useState("");
  const categories = new Set();
  const products = useContext(productsContext);

  products && products.map((item) => categories.add(item.category));
  console.log(sortOn);
  if (sortOn) {
    if (sortOn === "price") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortOn === "title") {
      products.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortOn === "rating") {
      products.sort((a, b) => b.rating.rate - a.rating.rate);
    }
  }
  console.log(sortOn);
  return (
    <div className="shop_page">
      <Filter categories={categories} setCategory={setCategory} />
      <Products products={products} categoryToFilter={displayCategory} />
    </div>
  );
};

export default ShopPage;
