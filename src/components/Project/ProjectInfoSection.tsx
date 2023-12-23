import ProjectInfoTitle from "./ProjectInfoTitle";

interface Props {
  emoji?: string;
  descriptionText: string;
  descriptionItem: string[];
}

function ProjectInfoSection({emoji, descriptionText, descriptionItem}: Props) {
  return (
    <>
      <div>
        <ProjectInfoTitle emoji={emoji} descriptionText={descriptionText} />
        <ul>
          {descriptionItem.map((text, index) => (
            <li className="list-disc ml-8" key={index}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProjectInfoSection;
