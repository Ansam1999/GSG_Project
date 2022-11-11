import "./Styles.css";
import React from "react";
import Quantity from "./Quantity";
import WishCartButtons from "./WishCartButtons";

const UserChoice = () => {
  return (
    <div className="control_choice">
      <Quantity />

      <WishCartButtons />
    </div>
  );
};

export default UserChoice;
