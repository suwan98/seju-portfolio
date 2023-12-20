"use client";
import {Variants, motion} from "framer-motion";
import SectionTitle from "../common/SectionTitle";
import PERSONAL_INFORMATION from "@/constants/PERSONAL_INFORMATION";
import ContactInfo from "./ContextInfo";

function IntroDescption() {
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
      },
    },
  };

  return (
    <>
      <div className="mt-12 mb-12 text-neutral-900">
        <SectionTitle title="고수완" />
        <div className="border rounded-2xl bg-white min-w-[50rem] min-h-[25rem] flex items-center justify-evenly">
          <motion.img
            initial="begin"
            animate="finish"
            variants={motionVariants}
            className="w-[11rem] h-[11rem] object-cover rounded-full shadow-lg"
            src="/assets/image/profile.jpg"
          />
          <div className="flex flex-col gap-2 items-start">
            <span className="font-suitSemiBold text-2xl">
              {PERSONAL_INFORMATION.name}
            </span>
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  );
}

export default IntroDescption;
