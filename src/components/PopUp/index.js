import React, { useContext, useState } from "react";
import Body from "./Body";
import "./Styles.css";

//import products from "./../../products.json";
import PopupHeader from "./PopupHeader";
import { productsContext } from "../../context/productsContext";
const PopUp = (props) => {
  const trigger = props.trigger;
  const id = props.id;
  console.log("popup", props);
  const products = useContext(productsContext);
  let product = products.find((product) => product.id === id);
  console.log(product);
  if (trigger) {
    document.body.style.overflow = "hidden";
  }

  return (
    <div className="popup">
      <PopupHeader
        title={product.title}
        handleCloseButton={props.handleClose}
      />
      <Body {...product} />
    </div>
  );
};

export default PopUp;
