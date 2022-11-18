import React, { useState } from "react";

import FixedCover from "./../components/FixedCover";
import SortBar from "../components/SortBar";
import ShopPage from "../components/ShopPage";
const ProductListing = ({ products }) => {
  const [sort, setSort] = useState("");
  return (
    <>
      <FixedCover />
      <SortBar products={products} setSort={setSort} />
      <ShopPage products={products} sortOn={sort} />
    </>
  );
};

export default ProductListing;
