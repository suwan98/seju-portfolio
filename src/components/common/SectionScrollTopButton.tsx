import {IoIosArrowUp} from "react-icons/io";
import {Variants, motion} from "framer-motion";

function SectionScrollTopButton() {
  const scrollButtonVariants: Variants = {
    begin: {
      opacity: 0,
    },
    finish: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };

  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <motion.button
        className="fixed right-[3%] bottom-[3%]"
        variants={scrollButtonVariants}
        initial="begin"
        animate="finish"
        onClick={handleScrollTop}>
        <IoIosArrowUp size="3rem" />
      </motion.button>
    </>
  );
}

export default SectionScrollTopButton;
