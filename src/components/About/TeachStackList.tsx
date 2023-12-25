import TEACH_STACK from "@/constants/TEACH_STACK";
import PERSONAL_INFORMATION from "@/constants/PERSONAL_INFORMATION";

function TeachStackList() {
  return (
    <div className="flex pb-12 flex-col gap-8">
      <h1 className="text-4xl font-suitBold pr-6">
        <span>🚀</span>
        <span>기술 스택</span>
      </h1>
      <ul className="flex  gap-3 items-center font-suitSemiBold">
        {PERSONAL_INFORMATION.teachStack.map((stack, index) => (
          <li
            key={index}
            className={`border p-3 ${
              TEACH_STACK[stack] || `bg-highlight`
            } rounded-lg text-teal-50 cursor-pointer transition-all  hover:scale-105 delay-75 ease-in-out`}>
            {stack}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeachStackList;
