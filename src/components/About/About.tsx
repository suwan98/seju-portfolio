import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import FadeAnimationWrapper from "../common/FadeAnimationWrapper";
import CardWrapper from "../common/CardWrapper";
import TeachStackList from "./TeachStackList";
import AboutDescription from "./AboutDescription";

function About() {
  return (
    <>
      <div className="pb-16 flex flex-col items-baseline">
        <SectionTitle title="저를 소개할게요!" />
        <div className="absolute left-0 bottom-[2%] z-10 tablet:w-90 tablet:h-90 mobile:w-40 mobile:h-40">
          <Image
            src="/assets/image/introduceImage.png"
            width="450"
            height="450"
            alt=""
          />
        </div>
        <FadeAnimationWrapper>
          <CardWrapper className="px-8 flex-col items-stretch min-h-[45rem]">
            <TeachStackList />
            <AboutDescription />
          </CardWrapper>
        </FadeAnimationWrapper>
      </div>
    </>
  );
}

export default About;
