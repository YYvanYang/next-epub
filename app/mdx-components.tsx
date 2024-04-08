import type { MDXComponents } from "mdx/types";

// TODO: https://nextjs.org/docs/app/building-your-application/configuring/mdx#custom-elements
// TODO: referenct react.dev docs projets
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
