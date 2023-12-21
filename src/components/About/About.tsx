import Image from "next/image";
import SpeechBubble from "../common/SpeechBubble";
import SectionTitle from "../common/SectionTitle";
import FadeAnimationWrapper from "../common/FadeAnimationWrapper";

function About() {
  return (
    <>
      <div className="pb-16 flex flex-col items-baseline">
        <SectionTitle title="저를 소개할게요!" />
        <div className="absolute left-0 bottom-[2%] z-10">
          <Image
            src="/assets/image/introduceImage.png"
            width="450"
            height="450"
            alt=""
          />
        </div>
        <FadeAnimationWrapper className="contents">
          <SpeechBubble className="ml-12 mb-8 text-neutral-900">
            안녕
          </SpeechBubble>
        </FadeAnimationWrapper>
      </div>
    </>
  );
}

export default About;
