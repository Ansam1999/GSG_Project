import "./Styles.css";
import React from "react";
import UserChoice from "./UserChoice";

const QuantityWishCart = () => {
  return (
    <div className="quantity_wish_cart">
      <div className="quantity_title">Quantity</div>
      <UserChoice />
    </div>
  );
};

export default QuantityWishCart;
