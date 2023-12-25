import splitToDot from "@/lib/utils/splitToDot";
import ProjectInfoSection from "./ProjectInfoSection";
import ProjectTechStackList from "./ProjectTechStackList";
import ProjectInfoURL from "./ProjectInfoURL";

interface Props {
  descrption: string;
  core: string;
  isTeamProject: boolean;
  techStack: string[];
  baseURL: {
    [key: string]: string;
  };
}

function ProjectDescrption({
  descrption,
  core,
  techStack,
  baseURL,
}: Props) {
  const splitedDescription = splitToDot(descrption);
  const splitedCore = splitToDot(core);

  return (
    <>
      <div className="flex flex-col gap-10 font-suitSemiBold">
        <ProjectInfoSection
          emoji="🎉"
          descriptionText="주요기능"
          descriptionItem={splitedCore}
        />
        <ProjectInfoSection
          emoji="📸"
          descriptionText="새롭게 알게 된 점"
          descriptionItem={splitedDescription}
        />
        <ProjectTechStackList techStack={techStack} />
        <ProjectInfoURL url={baseURL} />
      </div>
    </>
  );
}

export default ProjectDescrption;
