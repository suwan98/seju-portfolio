"use client";

import SectionTitle from "../common/SectionTitle";
import PERSONAL_INFORMATION from "@/constants/PERSONAL_INFORMATION";
import ContactInfo from "./ContextInfo";
import Profile from "./Profile";

function IntroDescption() {
  return (
    <>
      <div className="text-neutral-900">
        <SectionTitle title="고수완" />
        <div className="border rounded-2xl bg-white min-w-[50rem] min-h-[25rem] flex items-center justify-evenly custom-shadow">
          <Profile />
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
