import "./Styles.css";
import React from "react";

const WishCartButtons = () => {
  return (
    <>
      <div className="buttons">
        <button className="cart_button">Add to Cart</button>
        <button className="wish">Add to wishlist</button>
      </div>
    </>
  );
};

export default WishCartButtons;
