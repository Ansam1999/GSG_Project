import "./Styles.css";
import "./../../Shared/Styles.css";
import { GrPlay } from "react-icons/gr";
const Videos = () => {
  const Videos = [
    {
      url: "./assets/video.png",
      name: "Jamdani",
    },
    {
      url: "./assets/video2.png",
      name: "Lorem ipsum dolor sit amet",
    },
    {
      url: "./assets/video3.png",
      name: "Lorem ipsum dolor sit amet",
    },
  ];
  return (
    <div className="video_list">
      {Videos.map((video, index) => (
        <div key={index} className="video">
          <img src={video.url} />
          <span>{video.name}</span>
          <div className="circle">
            <GrPlay size={32} color="white" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Videos;
