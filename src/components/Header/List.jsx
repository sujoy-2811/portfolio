import { Link } from "react-scroll";
import { heroContent, navLinksData } from "../../constants/index";

function List({ className }) {
  return (
    <ul className={`flex items-center gap-1 ${className} font-mono text-sm`}>
      {navLinksData.map((item, idx) => (
        <li key={item.id} className="group">
          <Link
            className="cursor-pointer text-[#8b949e] px-3.5 py-2 rounded-md border border-transparent bg-transparent hover:bg-[#11161d] hover:text-vscode-text hover:border-vscode-accent/30 hover:-translate-y-[1px] transition-all duration-200 flex items-center gap-1.5"
            activeClass="!text-vscode-text bg-[#11161d] border border-vscode-accent/40 shadow-[0_0_20px_rgba(0,122,204,0.12)]"
            to={item.link}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <span className="text-vscode-accent/60 text-xs group-hover:text-vscode-accent transition-colors duration-200">
              {String(idx + 1).padStart(2, "0")}.
            </span>
            {item.title}
          </Link>
        </li>
      ))}
      <li className="ml-3">
        <a
          href={heroContent.resumeLink}
          download="Sujoy_Manna_Resume.pdf"
          className="text-[#0d1117] bg-vscode-accent hover:bg-vscode-accent/90 px-4 py-2 rounded-md transition-colors text-sm font-semibold"
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default List;
