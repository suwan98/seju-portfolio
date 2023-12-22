import TEACH_STACK from "@/constants/TEACH_STACK";
import IconButton from "../common/IconButton";

function TeachStackList() {
  return (
    <div className="flex pb-12 flex-col gap-8">
    <h1 className="text-4xl font-suitBold pr-6">
        <span>🚀</span>
        <span>기술 스택</span>
      </h1>
      <ul className="flex  gap-3 items-center font-suitSemiBold">
        {TEACH_STACK.map(({name, icon}) => (
          <IconButton key={name} icon={icon} name={name} />
        ))}
      </ul>
    </div>
  );
}

export default TeachStackList;

// - Git 버전관리 학습
// - HTML5, CSS3 학습
// - JavaScript 학습 / Vanlia JavaScript 프로젝트
// - React 학습 / React 파이널 프로젝트
// - 팀 프로젝트를 통한 협업 경험

