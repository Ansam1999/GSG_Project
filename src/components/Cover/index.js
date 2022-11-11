import "./Styles.css";
import Slider from "./Slider.js";
import Content from "./Content";
import { useState } from "react";
const Cover = () => {
  const coverImages = [
    "/assets/img1.png",
    "/assets/img11.png",
    "/assets/img111.png",
  ];
  const [coverUrl, setCover] = useState(coverImages[0]);
  const [index, setIndex] = useState(0);
  const handleSlider = () => {
    setIndex(index + 1);
  };
  if (index === 3) {
    setIndex(0);
  }
  return (
    <div className="cover_section">
      <img src={coverImages[index]} className="cover" alt="Cover Image" />
      <Content />
      <Slider images={coverImages} changeCover={handleSlider} />
    </div>
  );
};

export default Cover;
