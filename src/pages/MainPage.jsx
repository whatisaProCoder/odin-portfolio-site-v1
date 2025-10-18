import SectionHeader from "../components/common/SectionHeader";
import HeroSection from "../components/HeroSection";
import WorkSection from "../components/WorkSection/WorkSection";

function MainPage() {
  return (
    <div className="m-10 mt-16 max-sm:m-4 max-sm:mt-16">
      <HeroSection />
      <WorkSection />
    </div>
  );
}

export default MainPage;
