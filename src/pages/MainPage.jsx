import HeroSection from "../components/HeroSection";
import TechStackSection from "../components/TechStackSection";
import WorkSection from "../components/WorkSection";
import Footer from "../components/Footer";
import LoadingScreen from "../components/common/LoadingScreen";

function MainPage() {
  return (
    <>
      <LoadingScreen />
      <div className="m-10 mt-16 max-sm:m-4 max-sm:mt-16">
        <HeroSection />
        <WorkSection />
        <TechStackSection />
      </div>
      <Footer />
    </>
  );
}

export default MainPage;
