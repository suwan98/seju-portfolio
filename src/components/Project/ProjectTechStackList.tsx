import PROJECT_LIST from "@/constants/PROJECT_LIST";
import ProjectInfoTitle from "./ProjectInfoTitle";
import IconButton from "../common/IconButton";

interface Props {
  techStack: string[];
}

function ProjectTechStackList({techStack}: Props) {
  return (
    <div>
      <ProjectInfoTitle emoji="🪄" descriptionText="프로젝트 기술 스택" />
      <ul className="flex gap-4 flex-nowrap pl-8">
        {techStack.map((stack, index) => (
          <li
            key={index}
            className="border p-3 bg-highlight rounded-lg text-teal-50 cursor-pointer transition-all hover:bg-orange-400 hover:scale-105 delay-75 ease-in-out">
            {stack}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectTechStackList;
