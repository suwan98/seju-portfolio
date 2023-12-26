import {defineDocumentType, makeSource} from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

export const Post = defineDocumentType(() => ({
  name: "Posts",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {type: "string", required: true},
    category: {type: "string", required: true},
  },
}));

const rehypeOptions = {
  theme: "slack-dark",
  keepBackground: true,
};

const contentSource = makeSource({
  contentDirPath: "troubleContents",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    // @ts-ignore
    rehypePlugins: [[rehypePrettyCode, rehypeOptions], rehypeSlug],
  },
});

export default contentSource;
