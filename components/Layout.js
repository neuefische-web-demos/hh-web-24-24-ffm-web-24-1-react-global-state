export default function Layout({ children, count }) {
  return (
    <>
      <header>Ich bin der Header</header>
      {children}
      <footer>Ich bin der Footer,© {count} Dömser</footer>
    </>
  );
}
