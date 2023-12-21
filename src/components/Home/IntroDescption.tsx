"use client";

import SectionTitle from "../common/SectionTitle";
import PERSONAL_INFORMATION from "@/constants/PERSONAL_INFORMATION";
import ContactInfo from "./ContextInfo";
import Profile from "./Profile";

function IntroDescption() {
  return (
    <>
      <div className="py-12 text-neutral-900">
        <SectionTitle title="고수완" />
        <div className="border rounded-2xl bg-white min-w-[50rem] min-h-[25rem] flex items-center justify-evenly">
          <Profile />
          <div className="flex flex-col gap-2 items-start">
            <span className="font-suitSemiBold text-2xl">
              {PERSONAL_INFORMATION.name}
            </span>
            <ContactInfo />
          </div>
        </div>
        {/* <div className="flex">
          <motion.img
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            src="/assets/image/navigation.png"
            className="absolute cursor-pointer order-2"
          />
          {isHover && <Popover />}
        </div> */}
      </div>
    </>
  );
}

export default IntroDescption;
