import "./Styles.css";
import "./../Shared/Styles.css";
import Videos from "./Videos";
import Title from "../Shared/Title";
const RecommendedVideos = () => {
  return (
    <div className="section gray_section">
      <Title title="Recommended Videos" />
      <Videos />
      <button className="showMore_video">Show more</button>
    </div>
  );
};
export default RecommendedVideos;
