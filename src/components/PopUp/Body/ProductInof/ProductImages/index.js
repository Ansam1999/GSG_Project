import "./Styles.css";
import React, { useState } from "react";
import ImagesList from "./ImagesList";
import BigImage from "./BigImage";

const ProductImages = (props) => {
  const images = props.images;
  const [displayedImage, setDisplayed] = useState(images[0]);
  const display = (url) => {
    setDisplayed(url);
  };
  return (
    <div className="popup_images">
      <ImagesList images={[images]} displayImage={display} />
      <BigImage image={images} />
    </div>
  );
};

export default ProductImages;
