import React, { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./views/HomePage";
import ProductListing from "./views/ProductListing";
import axios from "axios";
import Login from "./views/Login";
import { productsContext } from "./context/productsContext";
const Router = () => {
  const user = localStorage.getItem("user");
  const products = useContext(productsContext);
  console.log(products);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {user ? (
            <>
              <Route index path="/" element={<HomePage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
            </>
          ) : (
            <>
              <Route index path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
          <Route path="/Shop" element={<ProductListing />} />
        </Route>{" "}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
