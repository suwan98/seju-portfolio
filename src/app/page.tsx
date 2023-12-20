import IntroDescption from "@/components/Home/IntroDescption";
import Introduce from "@/components/Home/Introduce";
import Stars from "@/components/common/Star/Stars";

export default function Home() {
  return (
    <>
      <section className="flex-col mobile:flex-row flex items-center justify-center mt-24">
        <Stars />
        <Introduce />
        <IntroDescption />
      </section>
    </>
  );
}
