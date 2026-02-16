import { projects } from "../../constants";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800/20 items-center">
      <div className="container-custom">
        <h2 className="section-heading mb-12">Featured Projects</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card group hover:bg-slate-800/80 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-4 text-xl text-slate-400">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      <BiLogoGithub />
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-sky-400 transition-colors"
                    >
                      <BiLinkExternal />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-slate-300 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6 text-sm text-slate-400">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-sky-500 mt-1">▹</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-700/50">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-sky-400/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
