import AddsBar from "./../components/AddsBar";
import Header from "./../components/Header";
import Cover from "./../components/Cover";
import Featured from "./../components/Featured";
import AboutMatter from "./../components/AboutMatter";
import Explore from "./../components/Explore";
import Shop from "./../components/Shop";
import RecommendedVideos from "./../components/RecommendedVideos";
import SimilarShops from "./../components/SimilarShops";
import Footer from "./../components/Footer";
function HomePage() {
  return (
    <>
      <AddsBar />
      <Header />
      <Cover />
      <Featured />
      <AboutMatter />
      <Explore />
      <Shop />
      <RecommendedVideos />
      <SimilarShops />
      <Footer />
    </>
  );
}

export default HomePage;
