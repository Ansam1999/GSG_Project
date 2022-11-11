import "./Styles.css";
import HeaderContent from "./HeaderContent";
import { HiMenuAlt3 } from "react-icons/hi";
import { useState } from "react";
const Header = () => {
  const [headerStyles, setStyles] = useState("header_content");
  const [isOpen, setOpenMenu] = useState("");
  const handleMenu = () => {
    if (!!isOpen) {
      setOpenMenu("");
    } else {
      setOpenMenu("opened");
    }
  };
  return (
    <div className="header">
      <img src="./assets/matter.png" className="matter_logo" alt="logo" />
      <HeaderContent headerStyle={headerStyles} openMenu={isOpen} />
      <HiMenuAlt3 size={24} className="burger_menu" onClick={handleMenu} />
    </div>
  );
};

export default Header;
