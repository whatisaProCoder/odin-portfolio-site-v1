import HeroSection from "../components/HeroSection";
import TechStackSection from "../components/TechStackSection";
import WorkSection from "../components/WorkSection";
import Footer from "../components/Footer";

function MainPage() {
  return (
    <>
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
