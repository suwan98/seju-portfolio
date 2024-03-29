"use clinet";

import {FaArrowDown} from "react-icons/fa";
import {Variants, motion} from "framer-motion";

function ArrowToBottom() {
  const arrowVariants: Variants = {
    hidden: {
      opacity: 0,
      transform: "translateY(0)",
    },
    show: {
      opacity: 1,
      transform: "translateY(100%)",
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const handleMoveAboutSection = () => {
    const aboutSection = document.getElementById("about");
    window.scrollTo({
      top: aboutSection?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.div
        onClick={handleMoveAboutSection}
        variants={arrowVariants}
        initial="hidden"
        animate="show"
        exit="exit"
        className="flex items-center flex-col cursor-pointer">
        <FaArrowDown size="2rem" />
        <span className="pt-2">스크롤을 이동해주세요!</span>
      </motion.div>
    </>
  );
}

export default ArrowToBottom;
