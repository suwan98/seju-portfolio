"use client";

import scrollToSection from "@/lib/utils/scrollToSection";
import useStore from "@/store/SectionActiveStore";
import {RefObject, useEffect, useState} from "react";

interface Props {
  refs: RefObject<HTMLElement>[];
}

function SectionDots({refs}: Props) {
  const dots = Array(3).fill(null);
  const activeIndex = useStore((state) => state.activeIndex);
  const setActiveIndex = useStore((state) => state.setActiveIndex);

  const handleMoveScrollInView = (index: number) => () => {
    scrollToSection(refs[index]);
    setActiveIndex(index);
  };
  /* 사용자 스크롤에 따른 dots 색상변화 기능*/
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;

      refs.forEach((ref, index) => {
        if (ref.current) {
          const sectionTop = ref.current.offsetTop;
          const sectionHeight = ref.current.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [refs, setActiveIndex]);

  return (
    <ul className="flex flex-col gap-4 fixed right-0 bottom-1/2 mr-12 cursor-pointer mobile:hidden">
      {dots.map((dot, index) => (
        <button
          onClick={handleMoveScrollInView(index)}
          key={index}
          className={`w-5 h-5 rounded-full shadow-md hover:scale-110 ease-in-out delay-75 transition-transform ${
            activeIndex === index ? "bg-highlight" : "bg-neutral-500"
          }`}>
          {dot}
        </button>
      ))}
    </ul>
  );
}

export default SectionDots;
