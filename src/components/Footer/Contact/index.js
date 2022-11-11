import "./../../Shared/Styles.css";

const Contact = () => {
  const Contact = [
    "26A Pagoda St, TANGS",
    " Singapore, 058187",

    " +65 6221 5462",
  ];
  return (
    <div className="footer_col">
      <span className="footer_title">Contact us</span>
      <div className="footer_section">
        {Contact.map((contact, index) => (
          <span key={index} className="footer_content">
            {contact}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Contact;
