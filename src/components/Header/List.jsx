import { Link } from "react-scroll";
import { navLinksData } from "../../constants/index";

function List({ className }) {
  return (
    <ul className={`flex items-center gap-8 ${className}`}>
      {navLinksData.map((item) => (
        <li key={item.id}>
          <Link
            className="nav-link cursor-pointer py-2 hover:text-sky-400 transition-colors"
            // activeClass="text-sky-400"
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
      <a
        href="https://drive.google.com/file/d/15ftEEo-GzWxuqMZx49lPAjuB2si7Dyu-/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-outline px-4 py-2 text-sm ml-4"
      >
        Resume
      </a>
    </ul>
  );
}

export default List;
