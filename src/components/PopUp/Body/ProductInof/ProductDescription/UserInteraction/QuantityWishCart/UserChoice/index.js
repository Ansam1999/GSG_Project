import "./Styles.css";
import React, { useContext, useState } from "react";
import Quantity from "./Quantity";
import WishCartButtons from "./WishCartButtons";
import { productsContext } from "../../../../../../../../context/productsContext";
import { CartContext } from "../../../../../../../../context/cartContext";

const UserChoice = ({ itemId }) => {
  const [quantity, setQuantity] = useState(1);
  const [toggleCart, setToggleCart] = useState(false);
  const products = useContext(productsContext);
  //const { cart, setAddToCart } = useContext(CartContext);

  if (setToggleCart) {
    let product = products.find((product) => product.id === itemId);
    /* setAddToCart({
      items: { ...cart?.items, product },
      total: cart?.total + product.price,
    });*/
  }
  return (
    <div className="control_choice">
      <Quantity setQuantity={setQuantity} quantity={quantity} />

      <WishCartButtons setToggleCart={setToggleCart} />
    </div>
  );
};

export default UserChoice;
