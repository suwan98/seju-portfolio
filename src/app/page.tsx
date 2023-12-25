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
import {AnimatePresence} from "framer-motion";
import {useRef} from "react";

export default function Home() {
  /* Refs를 통한 Section Navigation */
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const proejectRef = useRef(null);

  /* scroll 상태에 따른 조건부렌더링 */
  const scrollStatus = useScrollStatus();

  return (
    <>
      <section
        ref={homeRef}
        className="flex-col flex items-center min-h-screen justify-center">
        <Stars />
        <Introduce />
        <IntroDescption />
        <AnimatePresence>{!scrollStatus && <ArrowToBottom />}</AnimatePresence>
      </section>
      <section
        id="about"
        ref={aboutRef}
        className="flex-col flex items-center justify-center min-h-screen relative">
        <About />
      </section>
          <section
              id='project'
        ref={proejectRef}
        className="flex-col flex items-center justify-center min-h-screen relative">
        <Project />
      </section>
      <SectionDots refs={[homeRef, aboutRef, proejectRef]} />
      <AnimatePresence>
        {scrollStatus && <SectionScrollTopButton />}
      </AnimatePresence>
    </>
  );
}
