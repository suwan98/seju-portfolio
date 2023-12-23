import SectionTitle from "@/components/common/SectionTitle";

interface Props {
  params: string;
}

function TroubleShotting({params}: Props) {
  return (
    <>
      <section className="h-screen my-12 w-[80vh] mx-auto">
        <SectionTitle title="트러블 슈팅" />
        <div className="bg-neutral-100 h-screen w-full"></div>
      </section>
    </>
  );
}

export default TroubleShotting;
