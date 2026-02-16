import { BiMenuAltRight } from "react-icons/bi";
import List from "./List";
import { useState } from "react";
import DropDownMenu from "../utils/DropDownMenu";

function Nav({ className }) {
  const [menuShow, setMenuShow] = useState(false);

  return (
    <nav
      className={`flex justify-between items-center py-4 px-6 md:px-10 max-w-7xl mx-auto w-full z-50 ${className}`}
    >
      {/* Name / Logo */}
      <h1 className="text-2xl font-bold cursor-pointer font-mono tracking-tighter hover:scale-105 transition-transform duration-300">
        <span className="text-sky-400">&lt;</span>
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400">
          Sujoy
        </span>
        <span className="text-sky-400">/&gt;</span>
      </h1>

      {/* Mobile Menu Icon */}
      <button
        className="text-slate-100 text-3xl md:hidden hover:text-sky-400 transition-colors"
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
