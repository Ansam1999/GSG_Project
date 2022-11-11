import "./Styles.css";

const Slider = ({ changeCover }) => {
  return (
    <div className="slider" onClick={changeCover}>
      <p className="arrow">❯</p>
    </div>
  );
};

export default Slider;
