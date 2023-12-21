"use client";

import About from "@/components/About/About";
import ArrowToBottom from "@/components/Home/ArrowToBottom";
import IntroDescption from "@/components/Home/IntroDescption";
import Introduce from "@/components/Home/Introduce";
import Project from "@/components/Project/Project";
import SectionDots from "@/components/common/SectionDots";
import SectionScrollTopButton from "@/components/common/SectionScrollTopButton";
import Stars from "@/components/common/Star/Stars";
import useScrollStatus from "@/lib/hooks/useScrollStatus";
import {useRef} from "react";

export default function Home() {
  /* Refs를 통한 Section Navigation */
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const proejectRef = useRef(null);

  /* scroll 상태에 따른 조건부렌더링 */
  const scrollStatus = useScrollStatus();
  console.log(scrollStatus);

  return (
    <>
      <section
        ref={homeRef}
        className="flex-col flex items-center justify-center h-screen relative">
        <Stars />
        <Introduce />
        <IntroDescption />
        <ArrowToBottom />
      </section>
      <section
        ref={aboutRef}
        className="flex-col flex items-center justify-center h-screen">
        <About />
      </section>
      <section
        ref={proejectRef}
        className="flex-col flex items-center justify-center h-screen">
        <Project />
      </section>
      <SectionDots refs={[homeRef, aboutRef, proejectRef]} />
      {scrollStatus && <SectionScrollTopButton />}
    </>
  );
}
