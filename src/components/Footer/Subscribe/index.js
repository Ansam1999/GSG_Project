import "./Styles.css";
import "./../../Shared/Styles.css";
import SocialIcons from "./SocialIcons";

const Subscribe = () => {
  return (
    <div className="footer_col subscribe_part">
      <span className="footer_title">Subscribe to newsletter</span>
      <div className="footer_buttons">
        <button className="email_button">
          <span>Enter your email</span>
        </button>
        <button className="  subscribe">Subscribe</button>
      </div>
      <SocialIcons />
    </div>
  );
};

export default Subscribe;
