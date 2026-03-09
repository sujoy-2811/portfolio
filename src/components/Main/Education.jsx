import { education } from "../../constants";

const Education = () => {
  return (
    <section id="education" className="py-20 w-full relative">
      <div className="container-custom">
        <h2 className="section-heading mb-12">
          <span className="text-vscode-keyword">04.</span> Education
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-[#0d1117] border border-vscode-activity rounded-lg p-5 sm:p-6 hover:border-vscode-text/30 transition-all group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-vscode-text group-hover:text-vscode-accent transition-colors leading-tight">
                    {edu.degree}
                  </h3>
                  <span className="text-vscode-function text-sm mt-1 block">
                    {edu.institution}
                  </span>
                </div>
                <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-1 shrink-0">
                  <span className="text-xs text-[#8b949e] font-mono">
                    {edu.period}
                  </span>
                  <span className="text-xs text-vscode-accent font-semibold">
                    {edu.score}
                  </span>
                </div>
              </div>
              <span className="text-[#8b949e] text-sm">
                {edu.location}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
