import "./Styles.css";
import "./../../../Shared/Styles.css";

const FirstRow = ({ date, title, text }) => {
  return (
    <div className="half ">
      <hr className="line" />
      <p className="date">{date}</p>
      <p className="explore_name">{title}</p>
      <p className="pragraph ">{text}</p>
    </div>
  );
};

export default FirstRow;
