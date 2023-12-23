import {Variants, easeInOut} from "framer-motion";

const FADE_VARIANTS: Variants = {
  initial: {
    opacity: 0,
  },
  inView: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.3,
      ease: easeInOut,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
  finish: {
    transition: {
      duration: 0.3,
      ease: easeInOut,
    },
  },
};

export default FADE_VARIANTS;
