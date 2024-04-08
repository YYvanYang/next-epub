import { CustomMDX } from "~/components/component/mdx-remote";

export default async function RemoteMdxPage() {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  const res = await fetch(
    "https://raw.githubusercontent.com/vercel/next.js/9a6db5704aa8c0b800afb8a822a72b0fb6bc8719/docs/02-app/01-building-your-application/07-configuring/05-mdx.mdx",
  );
  const markdown = await res.text();
  return <CustomMDX source={markdown} />;
}
