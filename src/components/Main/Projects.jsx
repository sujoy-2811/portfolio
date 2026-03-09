import { projects } from "../../constants";
import { BiLinkExternal, BiLogoGithub } from "react-icons/bi";

const Projects = () => {
  return (
    <section id="projects" className="py-20 w-full relative">
      <div className="container-custom">
        <h2 className="section-heading mb-12">
          <span className="text-vscode-keyword">03.</span> Featured Projects
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-mono">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0d1117] border border-vscode-activity rounded-lg p-5 sm:p-6 hover:border-vscode-text/30 transition-all group flex flex-col h-full hover:shadow-xl hover:shadow-black/50"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-2 min-w-0">
                  <span className="text-vscode-text/40">
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      fill="currentColor"
                      className="octicon octicon-repo"
                    >
                      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                    </svg>
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-vscode-function group-hover:text-vscode-accent transition-colors leading-tight break-words">
                    {project.title}
                  </h3>
                  <span className="px-2 py-0.5 rounded-full border border-vscode-activity text-xs text-vscode-text/60 ml-1 sm:ml-2 shrink-0">
                    Public
                  </span>
                </div>
                <div className="flex gap-3 text-lg text-vscode-text/60 shrink-0">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-vscode-text transition-colors p-1 rounded hover:bg-vscode-activity/30"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <BiLogoGithub />
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-vscode-text transition-colors p-1 rounded hover:bg-vscode-activity/30"
                      aria-label={`${project.title} live demo`}
                    >
                      <BiLinkExternal />
                    </a>
                  )}
                </div>
              </div>

              <p className="text-vscode-text/80 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {project.details?.length > 0 && (
                <ul className="space-y-2 mb-5 border-l border-vscode-activity/30 pl-3">
                  {project.details.slice(0, 2).map((detail, i) => (
                    <li
                      key={i}
                      className="text-vscode-text/70 text-xs sm:text-sm leading-relaxed flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-vscode-keyword/70 rounded-full flex-shrink-0"></span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-auto">
                <div className="flex flex-wrap gap-2 items-center">
                  {project.tags &&
                    project.tags.map((tag, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1.5 text-xs text-vscode-text/70 px-2 py-1 rounded border border-vscode-activity/50 bg-vscode-sidebar/50"
                      >
                        <span
                          className={`w-3 h-3 rounded-full ${
                            i % 3 === 0
                              ? "bg-yellow-400"
                              : i % 3 === 1
                              ? "bg-blue-400"
                              : "bg-red-400"
                          }`}
                        ></span>
                        {tag}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
