import fs from "node:fs";
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

/** @type {import('rehype-pretty-code').Options} */
const options = {
  keepBackground: false,
  theme: JSON.parse(
    fs.readFileSync(
      new URL("./assets/moonlight-ii.json", import.meta.url),
      "utf-8",
    ),
  ),
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
  },
});

// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig);
