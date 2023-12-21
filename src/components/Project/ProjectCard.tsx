import CardWrapper from "../common/CardWrapper";

interface Props {
  children: React.ReactNode;
}

function ProjectCard({children}: Props) {
  return (
    <>
      <CardWrapper
        className="p-12"
        width="min-w-[65rem]"
        height="min-h-[45rem]">
        {children}
      </CardWrapper>
    </>
  );
}

export default ProjectCard;
