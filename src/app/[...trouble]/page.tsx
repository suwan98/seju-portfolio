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

  const MDXComponent = useMDXComponent(post?.body.code!);

  return (
    <>
      <section className="my-40 w-full text-[#B5B5B5] flex flex-col items-center">
        <SectionTitle title={post?.title!} />
        <article className=" py-12 mx-12 prose prose-invert prose-pre:p-6 prose-h1:text-center prose-h1:py-4 prose-h3:py-4  prose-code:after:hidden prose-code:before:hidden prose-code:text-md">
          <MDXComponent />
        </article>
      </section>
    </>
  );
}

export default TroubleShotting;
