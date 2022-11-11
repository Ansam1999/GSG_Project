import "./Styles.css";
import "./../../Shared/Styles.css";
import FirstRow from "./FirstRow";
const FirstCol = ({ date, title, text, url }) => {
  return (
    <div className="explore_col1">
      <FirstRow {...{ date, title, text }} />
      <img src={url} className="half_img" />
    </div>
  );
};

export default FirstCol;
