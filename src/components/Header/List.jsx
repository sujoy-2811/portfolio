import { Link } from "react-scroll";
import { navLinksData } from "../../constants/index";

function List({ className }) {
  return (
    <ul className={`flex items-center gap-1 ${className} font-mono text-sm`}>
      {navLinksData.map((item, idx) => (
        <li key={item.id}>
          <Link
            className="cursor-pointer text-[#8b949e] hover:text-vscode-text px-3.5 py-2 rounded-md hover:bg-[#161b22] transition-all duration-200 flex items-center gap-1.5"
            activeClass="!text-vscode-text bg-[#161b22]"
            to={item.link}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <span className="text-vscode-accent/60 text-xs">
              {String(idx + 1).padStart(2, "0")}.
            </span>
            {item.title}
          </Link>
        </li>
      ))}
      <li className="ml-3">
        <a
          href="https://drive.google.com/file/d/15ftEEo-GzWxuqMZx49lPAjuB2si7Dyu-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0d1117] bg-vscode-accent hover:bg-vscode-accent/90 px-4 py-2 rounded-md transition-colors text-sm font-semibold"
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default List;
