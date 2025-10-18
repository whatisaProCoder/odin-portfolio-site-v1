import { Projects } from "../../data/projects";
import SectionHeader from "../common/SectionHeader";
import WorkCard from "./WorkCard";

function WorkSection() {
  const workCards = Projects.map((project) => (
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
  ));
  return (
    <>
      <SectionHeader text="My Work" marginTop="5rem" />
      <div className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
        {workCards}
      </div>
    </>
  );
}

export default WorkSection;
