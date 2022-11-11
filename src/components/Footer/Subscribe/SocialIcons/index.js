import "./Styles.css";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
const SocialIcons = () => {
  return (
    <div className="social">
      <div className="social_icon">
        <CgFacebook size={16} color="black" />
      </div>
      <div className="social_icon">
        <AiOutlineTwitter size={16} color="black" />
      </div>
    </div>
  );
};

export default SocialIcons;
