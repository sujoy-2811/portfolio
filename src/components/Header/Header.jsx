import Nav from "./Nav";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#0d1117]/95 backdrop-blur-lg border-b border-[#21262d] supports-[backdrop-filter]:bg-[#0d1117]/80">
      {/* Activity bar accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-vscode-accent to-transparent opacity-40" />
      <Nav />
    </header>
  );
}

export default Header;
