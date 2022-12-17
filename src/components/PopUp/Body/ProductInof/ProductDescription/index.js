import "./Styles.css";
import React from "react";
import PriceRate from "./PriceRate";
import Description from "./Description";
import Title from "./Title";
import Table from "./Table";
import UserInteraction from "./UserInteraction";

const ProductDescription = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <div className="popup_description">
      <Title title={data.title} />
      <PriceRate rate={data.rating.rate} price={data.price} />
      <hr color="#F9F8F6" width="100%" />
      <Description content={data.description} />
      <hr color="#F9F8F6" width="100%" />
      <Table />
      <UserInteraction itemId={data.id} />
    </div>
  );
};

export default ProductDescription;
