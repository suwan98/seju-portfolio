import splitToDot from "@/lib/utils/splitToDot";
import ProjectInfoSection from "./ProjectInfoSection";
import ProjectInfoTitle from "./ProjectInfoTitle";

interface Props {
  descrption: string;
  core: string;
  isTeamProject: boolean;
  techStack: string[];
  baseURL: string;
}

function ProjectDescrption({
  descrption,
  core,
  isTeamProject,
  techStack,
  baseURL,
}: Props) {
  const splitedDescription = splitToDot(descrption);
  const splitedCore = splitToDot(core);

  return (
    <>
      <div className="flex flex-col gap-8">
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
        <ProjectInfoTitle emoji="🪄" descriptionText="프로젝트 기술 스택" />
        <ProjectInfoTitle emoji="🌏" descriptionText="프로젝트 URL" />
      </div>
    </>
  );
}

export default ProjectDescrption;
