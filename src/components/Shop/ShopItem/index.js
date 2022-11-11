import "./Styles.css";
import "./../../Shared/Styles.css";

const ShopItem = () => {
  const shopList = [
    {
      url: "./assets/shop1.png",
      name: "Pants",
    },
    {
      url: "./assets/shop2.png",
      name: "Jumpsuits",
    },
    {
      url: "./assets/shop3.png",
      name: "Tops",
    },
    {
      url: "./assets/shop4.png",
      name: "Accessories",
    },
  ];
  return (
    <div className="shop_items">
      {shopList.map((shopItem, index) => (
        <div key={index} className="shop_item">
          <img src={shopItem.url} className="shopImg" />
          <button className="shopButton">SHOP NOW</button>
          <button className="shopType">{shopItem.name}</button>
        </div>
      ))}
    </div>
  );
};

export default ShopItem;
