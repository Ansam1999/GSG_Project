import React, { useState } from "react";
import PopUp from "../../PopUp";
import "./Styles.css";

const ProductCard = ({ key1, item }) => {
  const [trigger, setTrigger] = useState(false);
  const [id, setId] = useState("");

  const handleQuickButton = (id) => {
    console.log(id);
    setTrigger(!trigger);
    setId(id);
  };
  const closePopUp = () => {
    setTrigger(false);
    document.body.style.overflow = "unset";
  };

  return (
    <div className="product_item" key={key1}>
      <img src={item.image} className="item_img" alt={item.name} />
      <p className="item_description">{item.title}</p>
      <p className="item_description">{item.price}</p>
      <p className={item.new === true ? "new_item" : "old_item"}>new</p>
      <button
        className="view_button"
        onClick={() => handleQuickButton(item.id)}
      >
        Quick View
      </button>
      <PopUp trigger={trigger} id={id} handleClose={closePopUp} />
    </div>
  );
};

export default ProductCard;
