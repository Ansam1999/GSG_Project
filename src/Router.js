import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./views/HomePage";
import ProductListing from "./views/ProductListing";
import axios from "axios";
const Router = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let target = false;
    if (!target) {
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => setProducts(response.data));
    }
    return () => {
      // cancel the subscription
      target = true;
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage products={products} />} />
          <Route
            path="/Shop"
            element={<ProductListing products={products} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
