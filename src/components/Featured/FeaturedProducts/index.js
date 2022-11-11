import { useState } from "react";
import PopUp from "../../PopUp";
import ProductCard from "../../Shared/ProductCard";
import "./Styles.css";

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      image: "./assets/img2.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
      id: 1,
    },
    {
      image: "./assets/img3.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
      id: 2,
    },
    {
      image: "./assets/img4.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
      id: 3,
    },
    {
      image: "./assets/img5.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: false,
      id: 4,
    },
    {
      image: "./assets/img6.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
      id: 5,
    },
    {
      image: "./assets/img7.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: false,
      id: 6,
    },
    {
      image: "./assets/img8.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
      id: 7,
    },
    {
      image: "./assets/img9.png",
      title: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: false,
      id: 8,
    },
  ];

  return (
    <div className="featured_products">
      {featuredProducts.map((item, index) => (
        <ProductCard key1={index} item={item} />
      ))}
    </div>
  );
};

export default FeaturedProducts;
