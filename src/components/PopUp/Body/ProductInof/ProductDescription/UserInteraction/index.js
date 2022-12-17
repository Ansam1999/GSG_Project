import "./Styles.css";
import React from "react";
import ProductColor from "./ProductColor";
import QuantityWishCart from "./QuantityWishCart";

const UserInteraction = ({ itemId }) => {
  const productColors = ["#4b4ba9", "#bc8f8f", "#ffffff", "#000000"];
  return (
    <div className="user_interaction">
      <ProductColor colors={productColors} />
      <QuantityWishCart itemId={itemId} />
    </div>
  );
};

export default UserInteraction;
