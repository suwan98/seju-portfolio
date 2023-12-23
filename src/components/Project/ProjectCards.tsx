import PROJECT_LIST from "@/constants/PROJECT_LIST";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import ProjectDescrption from "./ProjectDescrption";
import ProjectImageSwiper from "./ProjectImageSwiper";

function ProjectCards() {
  return (
    <>
      <ul className="grid-cols-1 grid gap-y-12">
        {PROJECT_LIST.map(
          ({
            id,
            projectImageSource,
            descrption,
            core,
            isTeamProject,
            baseURL,
            techStack,
          }) => (
            <ProjectCard key={id}>
              <ProjectImageSwiper source={projectImageSource} />
              <ProjectDescrption
                descrption={descrption}
                core={core}
                techStack={techStack}
                isTeamProject={isTeamProject}
                baseURL={baseURL}
              />
            </ProjectCard>
          )
        )}
      </ul>
    </>
  );
}

export default ProjectCards;
