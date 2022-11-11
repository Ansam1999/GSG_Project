import "./Styles.css";
import "./../Shared/Styles.css";
import Categories from "./Categories";
import Partners from "./Partners";
import Contact from "./Contact";
import Subscribe from "./Subscribe";
const Footer = () => {
  return (
    <div className=" footer">
      <div className="footer_part1">
        <div className="footer_details">
          <Categories />
          <Partners />
          <Contact />
        </div>
        <Subscribe />
      </div>
      <p className="copy">© Copyright Matter PTE LTD 2017</p>
    </div>
  );
};
export default Footer;
