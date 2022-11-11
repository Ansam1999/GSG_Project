import "./Styles.css";

import React from "react";
import { GrClose } from "react-icons/gr";
const PopupHeader = (props) => {
  const title = props.title;

  return (
    <div className="popup_header">
      <span className="popup_title">{title}</span>
      <GrClose
        size={20}
        className="close_icon"
        onClick={props.handleCloseButton}
      />
    </div>
  );
};

export default PopupHeader;
