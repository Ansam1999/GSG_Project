import "./Styles.css";
import React from "react";
import ReactStars from "react-rating-stars-component";
//import { Rating } from "@mui/material";

const Rate = (props) => {
  const rating = props.rate;
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="rating">
      <ReactStars
        size={20}
        value={rating}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#FF6008"
      />
      {/*  <Rating />*/}
      <span className="rate_numbers">{rating} of 5</span>
    </div>
  );
};

export default Rate;
