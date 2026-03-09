import { BiMenuAltRight, BiX } from "react-icons/bi";
import List from "./List";
import { useState } from "react";
import DropDownMenu from "../utils/DropDownMenu";

function Nav({ className }) {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <nav
      className={`flex justify-between items-center py-4 px-5 md:px-10 max-w-7xl mx-auto w-full z-50 ${className}`}
    >
      {/* Logo */}
      <a href="#home" className="cursor-pointer select-none">
        <span className="text-vscode-text font-bold text-xl tracking-tight">
          Sujoy
        </span>
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
