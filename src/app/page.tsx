"use client";

import About from "@/components/About/About";
import IntroDescption from "@/components/Home/IntroDescption";
import Introduce from "@/components/Home/Introduce";
import Project from "@/components/Project/Project";
import SectionDots from "@/components/common/SectionDots";
import Stars from "@/components/common/Star/Stars";
import {useRef} from "react";

export default function Home() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const proejectRef = useRef(null);

  return (
    <>
      <section
        ref={homeRef}
        className="flex-col mobile:flex-row flex items-center justify-center h-screen pb-32">
        <Stars />
        <Introduce />
        <IntroDescption />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <section ref={proejectRef}>
        <Project />
      </section>
      <SectionDots refs={[homeRef, aboutRef, proejectRef]} />
    </>
  );
}
