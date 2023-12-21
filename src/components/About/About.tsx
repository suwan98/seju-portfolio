"use client";

import Image from "next/image";
import SpeechBubble from "../common/SpeechBubble";

function About() {
  return (
    <>
      <div className="absolute left-0 bottom-[2%]">
        <Image
          src="/assets/image/introduceImage.png"
          width="450"
          height="450"
          alt=""
        />
      </div>
      <SpeechBubble>안녕</SpeechBubble>
    </>
  );
}

export default About;
