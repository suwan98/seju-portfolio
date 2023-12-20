import Introduce from "@/components/Home/Introduce";

export default function Home() {
  return (
    <>
      <section className="flex-col mobile:flex-row flex items-center justify-between">
        <div className="pt-12">
          <Introduce />
        </div>
      </section>
    </>
  );
}
