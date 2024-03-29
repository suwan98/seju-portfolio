"use client";

import SectionTitle from "../common/SectionTitle";
import PERSONAL_INFORMATION from "@/constants/PERSONAL_INFORMATION";
import ContactInfo from "./ContextInfo";
import Profile from "./Profile";
import CardWrapper from "../common/CardWrapper";
import FadeAnimationWrapper from "../common/FadeAnimationWrapper";

function IntroDescption() {
  return (
    <>
      <div className="text-neutral-900">
        <SectionTitle title="Who are you?" />
        <FadeAnimationWrapper>
          <CardWrapper justify="justify-evenly">
            <Profile />
            <div className="flex flex-col gap-2 items-start">
              <span className="font-suitSemiBold text-2xl">
                {PERSONAL_INFORMATION.name}
              </span>
              <ContactInfo />
            </div>
          </CardWrapper>
        </FadeAnimationWrapper>
      </div>
    </>
  );
}

export default IntroDescption;
