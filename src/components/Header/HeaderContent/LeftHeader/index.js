import "./Styles.css";
import { Link, NavLink } from "react-router-dom";
const LeftHeader = () => {
  const lists = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
  let activeStyle = {
    color: "#FF5E1B",
  };
  return (
    <div className="left_header">
      {lists.map((item, index) => (
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          className="select"
          key={index}
          to={`./${item}`}
        >
          {item}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftHeader;
