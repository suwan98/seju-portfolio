import CardWrapper from "../common/CardWrapper";
import FadeAnimationWrapper from "../common/FadeAnimationWrapper";

interface Props {
  children: React.ReactNode;
}

function ProjectCard({children}: Props) {
  return (
    <>
      <FadeAnimationWrapper>
        <CardWrapper className="px-8 gap-16 tablet:flex-col mobile:flex-col flex-col">
          {children}
        </CardWrapper>
      </FadeAnimationWrapper>
    </>
  );
}

export default ProjectCard;
