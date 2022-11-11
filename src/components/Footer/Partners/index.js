import "./Styles.css";
import "./../../Shared/Styles.css";

const Partners = () => {
  const partners = [
    "Support",
    " Shipping & Returns",
    " Size Guide ",
    " Product Care",
  ];
  return (
    <div className="footer_col">
      <span className="footer_title">Partners</span>
      <div className="footer_section">
        {partners.map((partner, index) => (
          <span key={index} className="footer_content">
            {partner}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Partners;
