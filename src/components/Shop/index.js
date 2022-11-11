import "./Styles.css";
import "./../Shared/Styles.css";
import ShopItem from "./ShopItem";
import Title from "../Shared/Title";
const Shop = () => {
  return (
    <div className="section">
      <Title title="Shop" />

      <ShopItem />
    </div>
  );
};

export default Shop;
