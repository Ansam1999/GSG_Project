import React from "react";
import AddsBar from "./../components/AddsBar";
import Header from "./../components/Header";
import FixedCover from "./../components/FixedCover";
import Footer from "./../components/Footer";
import SortBar from "../components/SortBar";
import ShopPage from "../components/ShopPage";
const ProductListing = () => {
  return (
    <>
      <AddsBar />
      <Header />
      <FixedCover />
      <SortBar />
      <ShopPage />
      <Footer />
    </>
  );
};

export default ProductListing;
