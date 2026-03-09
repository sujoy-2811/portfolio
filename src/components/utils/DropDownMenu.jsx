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
      className="absolute top-14 right-4 left-4 bg-[#161b22] border border-[#21262d] rounded-lg shadow-2xl p-2 z-50 flex flex-col md:hidden animate-fade-in"
    >
      <ul className="flex flex-col font-mono text-[15px]">
        {navLinksData.map((item, idx) => (
          <li key={item.id}>
            <Link
              onClick={() => closeMenu(false)}
              className="flex items-center gap-3 px-4 py-3 text-[#8b949e] hover:text-vscode-text hover:bg-[#0d1117] rounded-md transition-colors cursor-pointer"
              activeClass="!text-vscode-text bg-[#0d1117]"
              to={item.link}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
            >
              <span className="text-vscode-accent/60 text-xs w-5">
                {String(idx + 1).padStart(2, "0")}.
              </span>
              {item.title}
            </Link>
          </li>
        ))}
        <li className="mt-1 px-2 pb-1">
          <a
            href="https://drive.google.com/file/d/15ftEEo-GzWxuqMZx49lPAjuB2si7Dyu-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center text-[#0d1117] bg-vscode-accent hover:bg-vscode-accent/90 py-2.5 rounded-md transition-colors text-sm font-semibold"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropDownMenu;
