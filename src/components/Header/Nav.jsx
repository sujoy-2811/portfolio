import { BiMenuAltRight } from "react-icons/bi";
import List from "./List";
import { useState } from "react";
import DropDownMenu from "../utils/DropDownMenu";

function Nav({ className }) {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <nav
      className={`flex justify-between items-center py-4 px-6 md:px-12 max-w-7xl mx-auto w-full z-50 font-mono ${className}`}
    >
      {/* Name / Logo */}
      <h1 className="text-2xl font-bold cursor-pointer font-mono tracking-tighter text-vscode-text flex items-center gap-2">
        <span className="text-vscode-comment text-lg">&lt;</span>
        <span className="text-vscode-keyword">Sujoy</span>
        <span className="text-vscode-comment text-lg">/&gt;</span>
      </h1>

      {/* Mobile Menu Icon */}
      <button
        className="text-vscode-text text-3xl md:hidden hover:text-vscode-accent transition-colors"
        onClick={() => setMenuShow((prev) => !prev)}
      >
        <BiMenuAltRight />
      </button>

      {menuShow && <DropDownMenu closeMenu={setMenuShow} />}

      {/* Desktop Nav List */}
      <List className="hidden md:flex" />
    </nav>
  );
}

export default Nav;
