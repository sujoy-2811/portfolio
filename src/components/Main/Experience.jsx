import { experience } from "../../constants";

const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full relative">
      <div className="container-custom">
        <h2 className="section-heading mb-12">
          <span className="text-vscode-keyword">02.</span> Experience
        </h2>

        <div className="border-l-2 border-vscode-activity ml-3 sm:ml-6 space-y-12 font-mono">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-12 group">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-vscode-bg border-2 border-vscode-accent group-hover:bg-vscode-accent transition-colors duration-300 shadow shadow-vscode-accent/20"></div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-vscode-function group-hover:text-vscode-accent transition-colors">
                  {exp.role}{" "}
                  <span className="text-vscode-keyword text-base font-normal">
                    @ {exp.company}
                  </span>
                </h3>
                <span className="text-sm font-mono text-vscode-comment mt-1 sm:mt-0">
                  // {exp.period}
                </span>
              </div>

              <div className="mb-4 flex items-center gap-2 text-sm text-vscode-text/60">
                <span className="text-vscode-string">"{exp.location}"</span>
              </div>

              <ul className="space-y-3 mt-4 border-l border-vscode-activity/30 pl-4 ml-1">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-vscode-text/80 text-sm leading-relaxed flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 bg-vscode-keyword flex-shrink-0 opacity-50"></span>
                    <span>
                      {/* Highlights bold text if present in the data */}
                      {point.split(/(\*\*.*?\*\*)/).map((part, j) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong
                            key={j}
                            className="text-vscode-text font-normal bg-vscode-activity/30 px-1 rounded mx-0.5"
                          >
                            {part.slice(2, -2)}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
