import SectionScrollTopButton from "@/components/common/SectionScrollTopButton";
import SectionTitle from "@/components/common/SectionTitle";
import {allPosts} from "contentlayer/generated";
import {useMDXComponent} from "next-contentlayer/hooks";

interface Props {
  params: {slug: string};
}

function TroubleShotting({params}: Props) {
  const category = Object.values(params).flatMap((param) => param);
  const post = allPosts.find((post) =>
    category.some((slug) => post._raw.sourceFileDir === slug)
  );

  const MDXComponent = useMDXComponent(post?.body.code || "");

  return (
    <>
      <section className=" my-40 w-[80vw] mx-auto">
        <SectionTitle title={post?.title!} />
        <div className="bg-neutral-100 w-full text-neutral-800 ">
          <MDXComponent />
        </div>
      </section>
    </>
  );
}

export default TroubleShotting;
