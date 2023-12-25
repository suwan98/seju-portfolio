import PROJECT_LIST from "@/constants/PROJECT_LIST";
import ProjectCard from "./ProjectCard";
import ProjectDescrption from "./ProjectDescrption";
import ProjectImageSwiper from "./ProjectImageSwiper";
import TroubleShottingButton from "./TroubleShottingButton";

function ProjectCards() {
  return (
    <>
      <ul className="grid-cols-1 grid gap-y-12 ">
        {PROJECT_LIST.map(
          ({
            id,
            title,
            projectImageSource,
            descrption,
            core,
            isTeamProject,
            baseURL,
            techStack,
          }) => (
            <ProjectCard key={id}>
              <div className="col-span-1 flex flex-col items-center mobile:justify-center">
                <ProjectImageSwiper source={projectImageSource} />
                <TroubleShottingButton title={title} />
              </div>
              <div className="col-span-1">
                <ProjectDescrption
                  descrption={descrption}
                  core={core}
                  techStack={techStack}
                  isTeamProject={isTeamProject}
                  baseURL={baseURL}
                />
              </div>
            </ProjectCard>
          )
        )}
      </ul>
    </>
  );
}

export default ProjectCards;
