import "./../Shared/Styles.css";
import FeaturedProducts from "./FeaturedProducts";
import Title from "../Shared/Title";
const Featured = ({ products }) => {
  console.log("sort", products);
  return (
    <div className="section gray_section">
      <Title title="Featured" />
      <FeaturedProducts products={products.slice(0, 8)} />
    </div>
  );
};

export default Featured;
