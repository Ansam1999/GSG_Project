import "./Styles.css";
import React, { useState } from "react";

const Quantity = () => {
  const [quantity, setQuantity] = useState(1);
  const decrementQuantity = () => {
    if (quantity === 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="quantity_control">
      <div className="minus_plus" onClick={decrementQuantity}>
        -
      </div>
      <div className="quantity">{quantity}</div>
      <div className="minus_plus" onClick={() => setQuantity(quantity + 1)}>
        +
      </div>
    </div>
  );
};

export default Quantity;
