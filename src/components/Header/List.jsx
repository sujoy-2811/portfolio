import { Link } from "react-scroll";
import { navLinksData } from "../../constants/index";

function List({ className }) {
  return (
    <ul className={`flex items-center gap-8 ${className} font-mono text-sm`}>
      {navLinksData.map((item) => (
        <li key={item.id} className="group">
          <Link
            className="cursor-pointer text-vscode-text/80 hover:text-vscode-accent transition-colors py-2 flex items-center"
            activeClass="text-vscode-accent font-bold"
            to={item.link}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <span className="text-vscode-comment mr-1 opacity-0 group-hover:opacity-100 transition-opacity">
              ./
            </span>
            {item.title}
          </Link>
        </li>
      ))}
      <a
        href="https://drive.google.com/file/d/15ftEEo-GzWxuqMZx49lPAjuB2si7Dyu-/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-vscode-accent text-vscode-accent hover:bg-vscode-accent/10 px-4 py-2 rounded transition-colors ml-4"
      >
        Resume
      </a>
    </ul>
  );
}

export default List;
