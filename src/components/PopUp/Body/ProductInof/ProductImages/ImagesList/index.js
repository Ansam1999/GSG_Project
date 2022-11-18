import "./Styles.css";
import React from "react";

const ImagesList = (props) => {
  return (
    <div className="images_list">
      {props.images.map((url, index) => {
        return (
          <img
            key={index}
            src={url}
            className="list_item"
            onClick={() => props.displayImage(url)}
          />
        );
      })}
    </div>
  );
};

export default ImagesList;
