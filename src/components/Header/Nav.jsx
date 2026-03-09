import { BiMenuAltRight, BiX } from "react-icons/bi";
import List from "./List";
import { useState } from "react";
import DropDownMenu from "../utils/DropDownMenu";

function Nav({ className }) {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <nav
      className={`flex justify-between items-center py-3 px-5 md:px-10 max-w-7xl mx-auto w-full z-50 font-mono ${className}`}
    >
      {/* Logo — terminal prompt style */}
      <a
        href="#home"
        className="flex items-center gap-1.5 group cursor-pointer select-none"
      >
        <span className="text-green-400 text-sm group-hover:text-green-300 transition-colors">
          ~$
        </span>
        <span className="text-vscode-text font-bold text-lg tracking-tight">
          sujoy
        </span>
        <span className="w-2 h-5 bg-vscode-accent/80 inline-block ml-1 animate-pulse rounded-sm" />
      </a>

      {/* Mobile Menu Toggle */}
      <button
        type="button"
        aria-label="Toggle menu"
        className="text-vscode-text/80 text-2xl md:hidden hover:text-vscode-accent transition-colors p-1.5 rounded-md border border-transparent hover:border-[#21262d] hover:bg-[#161b22]"
        onClick={() => setMenuShow((prev) => !prev)}
      >
        {menuShow ? <BiX /> : <BiMenuAltRight />}
      </button>

      {menuShow && <DropDownMenu closeMenu={setMenuShow} />}

      {/* Desktop Nav List */}
      <List className="hidden md:flex" />
    </nav>
  );
}

export default Nav;
