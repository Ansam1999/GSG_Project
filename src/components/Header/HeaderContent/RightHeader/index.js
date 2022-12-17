import "./Styles.css";
import { IoSearchOutline, IoHeartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink } from "react-router-dom";
const RightHeader = () => {
  return (
    <div className="right_header">
      <NavLink
        className="login"
        to={"./Login"}
        onClick={() => localStorage.removeItem("user")}
      >
        Log out
      </NavLink>
      <IoSearchOutline size={24} className="icon" />
      <IoHeartOutline size={24} className="icon" />
      <HiOutlineShoppingBag size="24px" className="icon" />
    </div>
  );
};

export default RightHeader;
