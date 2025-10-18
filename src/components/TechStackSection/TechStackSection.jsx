import SectionHeader from "../common/SectionHeader";
import TechStackCard from "./TechStackCard";
import { TechStack } from "../../data/techStack";

function TechStackSection() {
  const techStackCards = TechStack.map((stack) => (
    <TechStackCard
      key={stack.id}
      group={stack.group}
      techIconUrls={stack.techIconUrls}
    />
  ));

  return (
    <>
      <SectionHeader text="My Tech Stack" marginTop="1rem" />
      <div className="mt-10 flex flex-wrap gap-12 justify-center">
        {techStackCards}
      </div>
    </>
  );
}

export default TechStackSection;
