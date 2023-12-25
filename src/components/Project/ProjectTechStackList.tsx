import ProjectInfoTitle from "./ProjectInfoTitle";

interface Props {
  techStack: string[];
}

interface teachStackMappedColorsValues {
  [key: string]: string;
}

function ProjectTechStackList({techStack}: Props) {
  const teachStackMappedColors: teachStackMappedColorsValues = {
    JavaScript: "bg-[#F7DF1E]",
    TypeScript: "bg-[#3178C6]",
    React: "bg-[#61DAFB]",
    Nextjs: "bg-[#000000]",
    Zustand: "bg-[#433e38]",
    ReactQuery: "bg-[#fb485c]",
    FramerMotion: "bg-[#f209b4]",
    Recoil: "bg-[#087df6]",
  };

  return (
    <div>
      <ProjectInfoTitle emoji="🪄" descriptionText="프로젝트 기술 스택" />
      <ul className="flex gap-4 pl-8 mobile:flex-wrap">
        {techStack.map((stack, index) => (
          <li
            key={index}
            className={`p-3 ${
              teachStackMappedColors[stack] || `bg-highlight`
            } rounded-lg text-teal-50 cursor-pointer transition-all  hover:scale-105 delay-75 ease-in-out`}>
            {stack}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectTechStackList;
