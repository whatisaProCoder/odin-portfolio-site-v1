import SectionHeader from "../components/common/SectionHeader";
import HeroSection from "../components/HeroSection";

function MainPage() {
  return (
    <div className="m-10 mt-16 max-sm:m-6 max-sm:mt-16">
      <HeroSection />
      <SectionHeader text="My Work" marginTop="5rem" />
    </div>
  );
}

export default MainPage;
