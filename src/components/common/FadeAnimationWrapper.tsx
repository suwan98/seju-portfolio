import FADE_VARIANTS from "@/constants/FADE_VARIANTS";
import {motion} from "framer-motion";
import {ComponentPropsWithoutRef} from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}

function FadeAnimationWrapper({children, className, ...rest}: Props) {
  return (
    <>
      <motion.div
        variants={FADE_VARIANTS}
        initial="initial"
        whileInView="inView"
        animate="finish"
        viewport={{once: true}}
        className={className}
        {...rest}>
        {children}
      </motion.div>
    </>
  );
}

export default FadeAnimationWrapper;
