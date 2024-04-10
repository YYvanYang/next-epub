import { Suspense } from "react";
import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { AppOnly } from "~/components/component/app-only";
import { PagesOnly } from "~/components/component/pages-only";
import { Code } from "./code";

const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 {...props} className="large-text">
      {props.children}
    </h1>
  ),
  AppOnly: AppOnly,
  PagesOnly: PagesOnly,
  code: Code,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: Record<string, React.ComponentType<any>>;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <Suspense fallback={<>Loading...</>}>
      <MDXRemote
        {...props}
        components={{ ...components, ...(props.components || {}) }}
      />
    </Suspense>
  );
}
