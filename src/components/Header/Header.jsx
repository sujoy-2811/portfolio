import Nav from "./Nav";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50 supports-[backdrop-filter]:bg-slate-900/60">
      <Nav />
    </header>
  );
}

export default Header;
