import React, { useState } from "react";
import Body from "./Body";
import "./Styles.css";

//import products from "./../../products.json";
import PopupHeader from "./PopupHeader";
const PopUp = (props) => {
  const trigger = props.trigger;
  const id = props.id;

  let product = props.allProducts.find((product) => product.id === id);
  if (trigger) {
    document.body.style.overflow = "hidden";
  }
  if (trigger) {
  }
  return trigger ? (
    <div className="popup">
      <PopupHeader
        title={product.title}
        handleCloseButton={props.handleClose}
      />
      <Body {...product} />
    </div>
  ) : (
    ""
  );
};

export default PopUp;
