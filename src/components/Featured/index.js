import "./../Shared/Styles.css";
import FeaturedProducts from "./FeaturedProducts";
import Title from "../Shared/Title";
const Featured = () => {
  const featuredProducts = [
    {
      url: "./assets/img2.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
    },
    {
      url: "./assets/img3.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
    },
    {
      url: "./assets/img4.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
    },
    {
      url: "./assets/img5.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
    },
    {
      url: "./assets/img6.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
    },
    {
      url: "./assets/img7.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
    },
    {
      url: "./assets/img8.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
    },
    {
      url: "./assets/img9.png",
      name: "Pueraria Mirifica And Study Phyto Estrogens",
      price: "$599.00",
      new: true,
    },
  ];
  return (
    <div className="section gray_section">
      <Title title="Featured" />
      <FeaturedProducts />
    </div>
  );
};

export default Featured;
