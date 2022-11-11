import "./Styles.css";
import React from "react";

const ImagesList = (props) => {
  const imageList = props.images;

  return (
    <div className="images_list">
      {imageList.map((url, index) => {
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
