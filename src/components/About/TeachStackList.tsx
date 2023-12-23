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
