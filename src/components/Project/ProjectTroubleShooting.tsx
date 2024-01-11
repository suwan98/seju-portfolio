import ProjectInfoTitle from "./ProjectInfoTitle";
import Image from "next/image";

interface Props {
  emoji: string;
  descriptionText: string;
  problem: string[];
  solution: string[];
  problemImageSource: string[];
  solutionImageSource: string[];
}

function ProjectTroubleShooting({
  emoji,
  descriptionText,
  problem,
  solution,
  problemImageSource,
  solutionImageSource,
}: Props) {
  const getListItemStyle = (item: string) => {
    const numberPattern = /\d+\./g; // 숫자와 '.'를 찾는 정규표현식 패턴
    return item.match(numberPattern)
      ? "list-none font-suitBold py-2 text-lg"
      : "list-disc ml-8";
  };

  return (
    <>
      <ProjectInfoTitle emoji={emoji} descriptionText={descriptionText} />
      <div className="pl-4 flex flex-col gap-8">
        <ul className="flex flex-col gap-3 list-disc">
          <h3 className="text-2xl text-red-500 font-suitBold">문제점은?</h3>
          {problem.map((p) => (
            <li className=" ml-8" key={p}>
              {p}
            </li>
          ))}
          {problemImageSource && (
            <div className="flex justify-center items-center">
              <Image
                src={problemImageSource[0]}
                alt=""
                width="500"
                height="500"
              />
            </div>
          )}
        </ul>

        <ul className="flex flex-col gap-3 list-disc">
          <h3 className="text-2xl text-green-500 font-suitBold">해결방법은?</h3>
          {solution.map((s) => (
            <li className={` ${getListItemStyle(s)}`} key={s}>
              {s}
            </li>
          ))}
          {solutionImageSource && (
            <div className="flex justify-center items-center pt-4">
              <Image
                src={solutionImageSource[0]}
                alt=""
                width="500"
                height="500"
              />
            </div>
          )}
        </ul>
      </div>
    </>
  );
}

export default ProjectTroubleShooting;
