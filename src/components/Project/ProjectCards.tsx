import PROJECT_LIST from "@/constants/PROJECT_LIST";
import ProjectCard from "./ProjectCard";

function ProjectCards() {
  return (
    <>
      <ul className="grid-cols-1 grid gap-y-12">
        {PROJECT_LIST.map((item) => (
          <ProjectCard key={item.id}>{item.title}</ProjectCard>
        ))}
      </ul>
    </>
  );
}

export default ProjectCards;
