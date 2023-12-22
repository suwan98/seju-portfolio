import PROJECT_LIST from "@/constants/PROJECT_LIST";
import ProjectCard from "./ProjectCard";
import Image from "next/image";
import ProjectDescrption from "./ProjectDescrption";

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
              <Image
                src={projectImageSource[0]}
                alt=""
                width="300"
                height="300"
              />
              <ProjectDescrption
                descrption={descrption}
                core={core}
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
