import "./../Shared/Styles.css";
import "./Styles.css";
import FirstCol from "./FirstCol";
import SecondCol from "./SecondCol";
import ThirdCol from "./ThirdCol";
import Title from "../Shared/Title";
const Explore = () => {
  const firstColExplore = {
    date: "FIELDTESTED JANUARY 19, 2017",
    title: "Connected Clothing: Raye Padit",
    text: `As a voice for conscious fashion, Raye Padit is motivated by the belief
    that one person’s actions, no matter how small, holds great impact. This
    core ideal has driven him to start his three passion projects: Connected
    Threads Asia, PeyaR, and Swagalls.`,
    url: "./assets/explore.png",
  };
  const exploreList = [
    {
      date: "FIELDTESTED JANUARY 19, 2017",
      title: "Kérastase: A Collaboration",
      url: "./assets/explore2.png",
    },
    {
      date: "FIELDTESTED JANUARY 19, 2017",
      title: "Remarkable Resilience: Grace Kim",
      text: `  A woman in my life who has shown remarkable resilience is my best friend
Grace. Since she was a kid, she struggled with general anxiety disorder
and panic disorder.`,
    },
    {
      date: "FIELDTESTED JANUARY 19, 2017",
      title: "Jaclynn Seah",
      text: `        Jaclynn’s wandering spirit has brought her from the lush greenery of
South America to the craters of Indonesia.`,
    },
    {
      date: "FIELDTESTED JANUARY 19, 2017",
      title: "How To Wear The Lounge Lunghi",
      url: "./assets/explore3.png",
    },
  ];
  return (
    <div className="section gray_section">
      <Title title="Explore" />
      <div className="explore_content">
        <FirstCol {...firstColExplore} />

        <SecondCol />
        <ThirdCol />
      </div>
      <button className="exploreButton">See the journal</button>
    </div>
  );
};

export default Explore;
