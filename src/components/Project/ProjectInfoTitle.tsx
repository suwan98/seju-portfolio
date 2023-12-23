interface Props {
  emoji?: string;
  descriptionText: string;
}

function ProjectInfoTitle({emoji, descriptionText}: Props) {
  return (
    <>
      <h2 className="text-4xl font-suitBold pb-4 flex items-center">
        <span>{emoji}</span>
        <span className="pt-2">{descriptionText}</span>
      </h2>
    </>
  );
}

export default ProjectInfoTitle;
