import CardWrapper from "../common/CardWrapper";
import FadeAnimationWrapper from "../common/FadeAnimationWrapper";

interface Props {
  children: React.ReactNode;
}

function ProjectCard({children}: Props) {
  return (
    <>
      <FadeAnimationWrapper>
        <CardWrapper
          className="p-12"
          width="min-w-[65rem]"
          height="min-h-[45rem]">
          {children}
        </CardWrapper>
      </FadeAnimationWrapper>
    </>
  );
}

export default ProjectCard;
