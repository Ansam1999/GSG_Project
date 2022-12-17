import "./Styles.css";
import React from "react";

const WishCartButtons = ({ setToggleCart }) => {
  return (
    <>
      <div className="buttons">
        <button className="cart_button" onClick={() => setToggleCart(true)}>
          Add to Cart
        </button>
        <button className="wish">Add to wishlist</button>
      </div>
    </>
  );
};

export default WishCartButtons;
