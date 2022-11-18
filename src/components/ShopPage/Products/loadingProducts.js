import { IoReloadSharp } from "react-icons/io5";
import "./Styles.css";
export const LoadingProducts = () => {
  const loadPages = [1, 2, 3, 4, 5, 6];
  return (
    <div className="loading">
      Loading
      <IoReloadSharp size={20} className="load_icon" />
    </div>
  );
};
