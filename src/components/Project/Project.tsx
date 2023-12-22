import SectionTitle from "../common/SectionTitle";
import ProjectCards from "./ProjectCards";

function Project() {
  return (
    <>
      <div className="my-[6rem] pt-12">
        <SectionTitle title="프로젝트" />
        <ProjectCards />
      </div>
    </>
  );
}

export default Project;
