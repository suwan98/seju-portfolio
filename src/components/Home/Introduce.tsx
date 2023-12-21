"use client";

import Typed from "react-typed";

function Introduce() {
  return (
    <h1 className="text-3xl flex flex-col gap-4 items-center my-8">
      <Typed
        strings={[
          "새로운것을 학습하는것에 대해 가장 큰 즐거움을 느끼는",
          "사용자 인터렉션에 관심이 많은",
        ]}
        typeSpeed={100}
        backDelay={1100}
        backSpeed={50}
        loop
      />
      <span>프론트엔드 개발자</span>
    </h1>
  );
}

export default Introduce;
