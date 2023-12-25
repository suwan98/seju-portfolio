"use client";

import {AnimatePresence, wrap, motion} from "framer-motion";
import {useState} from "react";
import ArrowRight from "./../common/ArrowRight";
import ArrowLeft from "../common/ArrowLeft";

interface Props {
  source: string[];
}

function ProjectImageSwiper({source}: Props) {
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const swiperVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, source.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative shadow-lg min-w-[20rem] max-w-[25rem] h-auto flex justify-center items-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="object-cover w-full"
          layout
          key={page}
          src={source[imageIndex]}
          custom={direction}
          variants={swiperVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: {type: "spring", stiffness: 300, damping: 30},
            opacity: {duration: 0.2},
          }}
          drag="x"
          dragConstraints={{left: 0, right: 0}}
          dragElastic={1}
          onDragEnd={(e, {offset, velocity}) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div
        onClick={() => paginate(1)}
        className="absolute top-1/2 left-0 z-10 cursor-pointer text-neutral-500 hover:scale-125 delay-75 ease-in-out transition-transform ">
        <ArrowLeft />
      </div>
      <div
        onClick={() => paginate(-1)}
        className="absolute top-1/2 right-0 z-10 cursor-pointer text-neutral-500 hover:scale-125 delay-75 ease-in-out transition-transform">
        <ArrowRight />
      </div>
    </div>
  );
}

export default ProjectImageSwiper;
