import {Variants, easeInOut} from "framer-motion";

const FADE_VARIANTS: Variants = {
  initial: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
    transition: {
      delay: 0.3,
      ease: easeInOut,
    },
  },
  exit: {
    opacity: 0,
  },
  finish: {
    transition: {
      duration: 0.3,
    },
  },
};

export default FADE_VARIANTS;
