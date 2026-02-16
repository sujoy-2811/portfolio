import { experience } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 relative w-full border-t border-slate-800/50"
    >
      <div className="container-custom">
        <h2 className="section-heading mb-12">Professional Experience</h2>

        <div className="relative border-l-2 border-slate-700 ml-3 sm:ml-6 space-y-12">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 sm:pl-12 group">
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-500 group-hover:bg-sky-500 transition-colors duration-300"></div>

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-sm font-mono text-sky-400/80 bg-sky-900/10 px-2 py-1 rounded">
                  {exp.period}
                </span>
              </div>

              <div className="mb-4">
                <span className="text-slate-300 font-medium text-lg">
                  {exp.company}
                </span>
                <span className="text-slate-500 text-sm ml-2">
                  • {exp.location}
                </span>
              </div>

              <ul className="space-y-3 mt-4">
                {exp.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-slate-400 text-sm leading-relaxed flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-slate-600 flex-shrink-0 group-hover:bg-sky-500/50 transition-colors"></span>
                    <span>
                      {/* Highlights bold text if present in the data, though currently plain string */}
                      {point.split(/(\*\*.*?\*\*)/).map((part, j) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong
                            key={j}
                            className="text-slate-200 font-semibold"
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
