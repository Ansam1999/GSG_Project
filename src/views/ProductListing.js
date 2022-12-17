import React, { useContext, useState } from "react";

import FixedCover from "./../components/FixedCover";
import SortBar from "../components/SortBar";
import ShopPage from "../components/ShopPage";
import { productsContext } from "../context/productsContext";
const ProductListing = () => {
  const [sort, setSort] = useState("");
  return (
    <>
      <FixedCover />
      <SortBar setSort={setSort} />
      <ShopPage sortOn={sort} />
    </>
  );
};

export default ProductListing;
