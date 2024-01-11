import splitToDot from "@/lib/utils/splitToDot";
import ProjectInfoSection from "./ProjectInfoSection";
import ProjectTechStackList from "./ProjectTechStackList";
import ProjectInfoURL from "./ProjectInfoURL";
import ProjectTroubleShooting from "./ProjectTroubleShooting";

interface Props {
  descrption: string;
  core: string;
  isTeamProject: boolean;
  techStack: string[];
  problem?: string[];
  solution?: string[];
  problemImageSource?: string[];
  solutionImageSource?: string[];
  baseURL: {
    [key: string]: string;
  };
}

function ProjectDescrption({
  descrption,
  core,
  techStack,
  baseURL,
  problem,
  solution,
  problemImageSource,
  solutionImageSource,
}: Props) {
  const splitedDescription = splitToDot(descrption);
  const splitedCore = splitToDot(core);

  return (
    <>
      <div className="flex flex-col gap-10 font-suitSemiBold">
        <ProjectTechStackList techStack={techStack} />
        <ProjectInfoURL url={baseURL} />
        <ProjectInfoSection
          emoji="🎉"
          descriptionText="주요기능"
          descriptionItem={splitedCore}
        />
        <ProjectInfoSection
          emoji="💡"
          descriptionText="프로젝트를 통해 새롭게 알게 된 것들"
          descriptionItem={splitedDescription}
        />
        {problem && solution && problemImageSource && (
          <ProjectTroubleShooting
            emoji="🔥"
            descriptionText="프로젝트 진행 시 마주쳤던 문제와 해결과정"
            problem={problem}
            problemImageSource={problemImageSource}
            solutionImageSource={solutionImageSource!}
            solution={solution}
          />
        )}
      </div>
    </>
  );
}

export default ProjectDescrption;
