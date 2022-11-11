import "./Styles.css";
import "./../../Shared/Styles.css";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";
const SecondCol = () => {
  return (
    <div className="explore_col2">
      <FirstRow />
      <SecondRow />
    </div>
  );
};
export default SecondCol;
