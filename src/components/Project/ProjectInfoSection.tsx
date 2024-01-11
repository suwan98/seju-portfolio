import ProjectInfoTitle from "./ProjectInfoTitle";

interface Props {
  emoji?: string;
  descriptionText: string;
  descriptionItem: string[];
}

function ProjectInfoSection({emoji, descriptionText, descriptionItem}: Props) {
  /* 특정 문자열로 시작하는지 검사하는 함수 */
  const startsWithSpecificString = (str: string, regExp: RegExp) => {
    return regExp.test(str);
  };

  return (
    <>
      <div>
        <ProjectInfoTitle emoji={emoji} descriptionText={descriptionText} />
        <ul>
          {descriptionItem.map((text, index) => (
            <li
              className={
                startsWithSpecificString(text, /^➡️/)
                  ? "list-none ml-8 pt-2"
                  : "list-disc ml-8 pt-3 pb-1"
              }
              key={index}>
              {text}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProjectInfoSection;
