import type { MDXComponents } from "mdx/types";

// TODO: https://nextjs.org/docs/app/building-your-application/configuring/mdx#custom-elements
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
