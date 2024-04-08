import type { MDXComponents } from "mdx/types";
import { AppOnly } from "~/components/component/app-only";
import { PagesOnly } from "~/components/component/pages-only";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    AppOnly: AppOnly,
    PagesOnly: PagesOnly,
    ...components,
  };
}
