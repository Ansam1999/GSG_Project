import "./Styles.css";
import React, { useState } from "react";

const Description = (props) => {
  const [seeMore, setSee] = useState("description_content");
  const [visible, setVisible] = useState("visible");
  const handleSeeMore = () => {
    setSee("full_description_content");
    setVisible("hidden_button");
  };
  return (
    <div className="description">
      <p className="description_title">Description</p>
      <div className={seeMore}>{props.content}</div>
      <button onClick={handleSeeMore} className={`see_more_button ${visible}`}>
        See More
      </button>
    </div>
  );
};

export default Description;
