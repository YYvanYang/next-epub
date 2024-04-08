// just for remote mdx test
export function PagesOnly({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <header className="text-green-300 m-2">Pages Only</header>
      {children}
    </section>
  );
}
