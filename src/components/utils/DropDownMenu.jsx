import { Link } from "react-scroll";
import { navLinksData } from "../../constants/index";
import { useRef, useEffect } from "react";

const DropDownMenu = ({ closeMenu }) => {
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <div
      ref={menuRef}
      className="absolute top-16 right-6 w-48 bg-slate-800 border border-slate-700/50 rounded-xl shadow-2xl p-4 z-50 flex flex-col gap-3 md:hidden animate-fade-in animate-slide-in-from-top-4"
    >
      <ul className="flex flex-col gap-1">
        {navLinksData.map((item) => (
          <li key={item.id}>
            <Link
              onClick={() => closeMenu(false)}
              className="block px-4 py-2 text-slate-300 hover:text-sky-400 hover:bg-slate-700/50 rounded-lg transition-colors cursor-pointer text-sm font-medium"
              activeClass="text-sky-400 bg-slate-700/30"
              to={item.link}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <a
            href="https://drive.google.com/file/d/15ftEEo-GzWxuqMZx49lPAjuB2si7Dyu-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 mt-2 text-center text-sky-400 border border-sky-500/30 rounded-lg hover:bg-sky-500/10 transition-colors text-sm font-medium"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
