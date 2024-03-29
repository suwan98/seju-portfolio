"use client";

import {Variants, easeInOut, motion} from "framer-motion";

function Profile() {
  const motionVariants: Variants = {
    begin: {
      x: 100,
      opacity: 0,
      filter: "blur(50px)",
    },
    finish: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        delay: 0.3,
        ease: easeInOut,
      },
    },
  };

  return (
    <>
      <motion.img
        initial="begin"
        animate="finish"
        variants={motionVariants}
        className="w-[11rem] h-[11rem] object-cover rounded-full shadow-lg mobile:w-[5rem] mobile:h-[5rem]"
        src="/assets/image/profile.jpg"
      />
    </>
  );
}

export default Profile;
