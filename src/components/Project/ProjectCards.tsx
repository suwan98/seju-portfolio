import PROJECT_LIST from "@/constants/PROJECT_LIST";
import ProjectCard from "./ProjectCard";
import ProjectDescrption from "./ProjectDescrption";
import ProjectImageSwiper from "./ProjectImageSwiper";
import TroubleShottingButton from "./TroubleShottingButton";

function ProjectCards() {
  return (
    <>
      <ul className="grid-cols-1 grid gap-y-12">
        {PROJECT_LIST.map(
          ({
            id,
            filePath,
            title,
            projectImageSource,
            descrption,
            core,
            isTeamProject,
            baseURL,
            techStack,
            problem,
            problemImageSource,
            solution,
            solutionImageSource,
          }) => (
            <ProjectCard key={id}>
              <div className="col-span-1 flex flex-col items-center mobile:justify-center flex-1">
                <h1 className="text-3xl mb-8 font-jalnan grandientTitle">
                  {title}
                </h1>
                <ProjectImageSwiper source={projectImageSource} />
              </div>
              <div className="col-span-1 flex-1">
                <ProjectDescrption
                  descrption={descrption}
                  core={core}
                  techStack={techStack}
                  isTeamProject={isTeamProject}
                  baseURL={baseURL}
                  problem={problem}
                  solution={solution}
                  problemImageSource={problemImageSource}
                  solutionImageSource={solutionImageSource}
                />
              </div>
              <TroubleShottingButton filePath={filePath} title={title} />
            </ProjectCard>
          )
        )}
      </ul>
    </>
  );
}

export default ProjectCards;
