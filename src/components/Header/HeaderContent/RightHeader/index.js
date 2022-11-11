import "./Styles.css";
import { IoSearchOutline, IoHeartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
const RightHeader = () => {
  return (
    <div className="right_header">
      <button className="login">LOGIN</button>
      <IoSearchOutline size={24} className="icon" />
      <IoHeartOutline size={24} className="icon" />
      <HiOutlineShoppingBag size="24px" className="icon" />
    </div>
  );
};

export default RightHeader;
