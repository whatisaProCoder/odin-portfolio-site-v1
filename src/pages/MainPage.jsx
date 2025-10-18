import HeroSection from "../components/HeroSection";
import TechStackSection from "../components/TechStackSection";
import WorkSection from "../components/WorkSection";

function MainPage() {
  return (
    <div className="m-10 mt-16 max-sm:m-4 max-sm:mt-16">
      <HeroSection />
      <WorkSection />
      <TechStackSection />
    </div>
  );
}

export default MainPage;
