"use client";

import Image from "next/image";
import SpeechBubble from "../common/SpeechBubble";
import SectionTitle from "../common/SectionTitle";
import {Variants, easeInOut, motion, useInView} from "framer-motion";
import {useRef} from "react";

function About() {
  /* 이미지가 뷰포트에 감지되었을때만 실행 */
  const imageVariants: Variants = {
    initial: {
      opacity: 0,
      translateY: 0,
    },
    inView: {
      opacity: 1,
      translateY: -20,
      transition: {
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
    },

    finish: {
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };

  return (
    <>
      <div className="pb-16 flex flex-col items-baseline">
        <SectionTitle title="저를 소개할게요!" />
        <motion.div
          className="absolute left-0 bottom-[2%] z-10"
          variants={imageVariants}
          initial="initial"
          whileInView="inView"
          exit="exit"
          animate="finish">
          <Image
            className="image-polygon"
            src="/assets/image/introduceImage.png"
            width="450"
            height="450"
            alt=""
          />
        </motion.div>
        <SpeechBubble className="ml-12 mb-8 text-neutral-900">
          안녕
        </SpeechBubble>
      </div>
    </>
  );
}

export default About;
