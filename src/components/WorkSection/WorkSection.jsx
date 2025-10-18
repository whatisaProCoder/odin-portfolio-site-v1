import { useState } from "react";
import { Projects } from "../../data/projects";
import SectionHeader from "../common/SectionHeader";
import WorkCard from "./WorkCard";

function WorkSection() {
  const [uptilID, setUptilID] = useState(5);

  const handleShowMore = () => {
    setUptilID(Projects.length - 1);
  };

  const workCards = Projects.filter((project) => project.id <= uptilID).map(
    (project) => (
      <WorkCard
        key={project.id}
        title={project.title}
        titleColor={project.titleColor}
        imageSrc={project.imageSrc}
        summary={project.summary}
        repoLink={project.repository}
        liveLink={project.live}
        techIconURLs={project.techUsed}
      />
    )
  );
  return (
    <>
      <SectionHeader text="My Work" marginTop="5rem" />
      <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
        {workCards}
      </div>
      {uptilID != Projects.length - 1 ? (
        <div
          className="mt-8 mb-12 text-xl text-center underline text-[#c2c2c2] hover:text-[#3390f3] cursor-pointer select-none"
          onClick={handleShowMore}
        >
          Show More
        </div>
      ) : (
        <div className="my-[4rem]"></div>
      )}
    </>
  );
}

export default WorkSection;
