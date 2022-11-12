import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Products from "./Products";
import "./Styles.css";
import axios from "axios";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [displayCategory, setCategory] = useState("");
  const categories = new Set();
  //
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
  }, []);

  products && products.map((item) => categories.add(item.category));

  return (
    <div className="shop_page">
      <Filter categories={categories} setCategory={setCategory} />
      <Products products={products} categoryToFilter={displayCategory} />
    </div>
  );
};

export default ShopPage;
