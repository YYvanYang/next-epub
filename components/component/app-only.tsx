// just for remote mdx test
export function AppOnly({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <header className="text-purple-300 m-2">App Only</header>
      {children}
    </section>
  );
}
