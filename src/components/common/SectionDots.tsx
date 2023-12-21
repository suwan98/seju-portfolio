"use client";

import scrollToSection from "@/lib/utils/scrollToSection";
import {RefObject, useState} from "react";

interface Props {
  refs: RefObject<HTMLElement>[];
}

function SectionDots({refs}: Props) {
  const dots = Array(3).fill(null);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleMoveScrollInView = (index: number) => () => {
    scrollToSection(refs[index]);
    setActiveIndex(index);
  };

  return (
    <ul className="flex flex-col gap-4 fixed right-0 bottom-1/2 mr-12 cursor-pointer">
      {dots.map((dot, index) => (
        <button
          onClick={handleMoveScrollInView(index)}
          key={index}
          className={`w-6 h-6 rounded-full shadow-md hover:scale-110 ease-in-out delay-75 transition-transform ${
            activeIndex === index ? "bg-highlight" : "bg-neutral-500"
          }`}>
          {dot}
        </button>
      ))}
    </ul>
  );
}

export default SectionDots;

// background: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);
