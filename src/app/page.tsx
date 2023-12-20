import About from "@/components/About/About";
import IntroDescption from "@/components/Home/IntroDescption";
import Introduce from "@/components/Home/Introduce";
import Project from "@/components/Project/Project";
import SectionDots from "@/components/common/SectionDots";
import Stars from "@/components/common/Star/Stars";

export default function Home() {
  return (
    <>
      <section className="flex-col mobile:flex-row flex items-center justify-center h-screen pb-32">
        <Stars />
        <Introduce />
        <IntroDescption />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Project />
      </section>
      <SectionDots />
    </>
  );
}
