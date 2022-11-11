import "./Styles.css";
import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";
import { useState } from "react";

const HeaderContent = ({ headerStyle, openMenu }) => {
  const [isblock, setblock] = useState({ openMenu });
  return (
    <div className={`${headerStyle} ${openMenu}`}>
      <LeftHeader />
      <RightHeader />
    </div>
  );
};

export default HeaderContent;
