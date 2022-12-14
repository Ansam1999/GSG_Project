import React, { useState, useEffect, useContext } from "react";
import Cover from "./../components/Cover";
import Featured from "./../components/Featured";
import AboutMatter from "./../components/AboutMatter";
import Explore from "./../components/Explore";
import Shop from "./../components/Shop";
import RecommendedVideos from "./../components/RecommendedVideos";
import SimilarShops from "./../components/SimilarShops";
import axios from "axios";
import { productsContext } from "../context/productsContext";

const HomePage = () => {
  const products = useContext(productsContext);

  return (
    <>
      <Cover />
      <Featured
        products={
          products &&
          products.sort((a, b) =>
            a.rating.rate > b.rating.rate
              ? -1
              : b.rating.rate > a.rating.rate
              ? 1
              : 0
          )
        }
      />
      <AboutMatter />
      <Explore />
      <Shop />
      <RecommendedVideos />
      <SimilarShops />
    </>
  );
};

export default HomePage;
