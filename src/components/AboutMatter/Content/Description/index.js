import "./Styles.css";
import Countries from "./Countries";
import MatterTribe from "./MatterTribe";
const Description = () => {
  return (
    <div className="about_description">
      <p className="first_p">
        Our mission is threefold - to foster designer-artisan collaborations,
        inspire consumers to value provenance and process, and pioneer industry
        change and sustainability for rural textile communities.
      </p>
      <p className="gray_txt">Artisan Employment Days Created</p>
      <p className="number">123456</p>
      <p className="gray_txt">Countries Involved To Date</p>
      <Countries />
      <p className="gray_txt">#MatterTribe </p>
      <MatterTribe />
    </div>
  );
};

export default Description;
