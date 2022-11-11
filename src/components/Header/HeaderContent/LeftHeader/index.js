import "./Styles.css";

const LeftHeader = () => {
  const lists = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
  return (
    <div className="left_header">
      {lists.map((item, index) => (
        <select key={index} className="select">
          <option>{item}</option>
        </select>
      ))}
    </div>
  );
};

export default LeftHeader;
