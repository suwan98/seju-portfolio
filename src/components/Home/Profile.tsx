"use client";

import {Variants, easeInOut, motion} from "framer-motion";
import Image from "next/image";

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
      <Image
        alt="profile-image"
        width="176"
        height="176"
        className="w-[11rem] h-[11rem] object-cover rounded-full shadow-lg mobile:w-[5rem] mobile:h-[5rem]"
        src="/assets/image/profile.jpg"
      />
    </>
  );
}

export default Profile;
