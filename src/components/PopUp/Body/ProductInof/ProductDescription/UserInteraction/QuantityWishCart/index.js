import "./Styles.css";
import React from "react";
import UserChoice from "./UserChoice";

const QuantityWishCart = ({ itemId }) => {
  return (
    <div className="quantity_wish_cart">
      <div className="quantity_title">Quantity</div>
      <UserChoice itemId={itemId} />
    </div>
  );
};

export default QuantityWishCart;
