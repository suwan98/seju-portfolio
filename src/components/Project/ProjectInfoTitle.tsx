interface Props {
  emoji?: string;
  descriptionText?: string;
}

function ProjectInfoTitle({emoji, descriptionText}: Props) {
  return (
    <>
      <h2 className="text-3xl font-suitBold pb-4 flex items-center mobile:text-xl mobile:justify-center">
        <span>{emoji}</span>
        <span className="pt-2">{descriptionText}</span>
      </h2>
    </>
  );
}

export default ProjectInfoTitle;
