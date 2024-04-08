import { MDXRemote, type MDXRemoteProps } from "next-mdx-remote/rsc";
import { AppOnly } from "~/components/component/app-only";
import { PagesOnly } from "~/components/component/pages-only";

const components = {
  h1: (props: React.HTMLProps<HTMLHeadingElement>) => (
    <h1 {...props} className="large-text">
      {props.children}
    </h1>
  ),
  AppOnly: AppOnly,
  PagesOnly: PagesOnly,
};

type CustomMDXProps = MDXRemoteProps & {
  components?: Record<string, React.ComponentType<any>>;
};

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
