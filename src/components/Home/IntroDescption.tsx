"use client";
import {Variants, motion} from "framer-motion";

function IntroDescption() {
  const motionVariants: Variants = {
    initial: {x: 100, opacity: 0, filter: "blur(3.125rem)"},
  };

  return (
    <>
      <motion.p>IntroDescption</motion.p>
    </>
  );
}

export default IntroDescption;
