import Nav from "./Nav";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-vscode-bg/90 backdrop-blur-md border-b border-vscode-activity shadow-md supports-[backdrop-filter]:bg-vscode-bg/60">
      <Nav />
    </header>
  );
}

export default Header;
