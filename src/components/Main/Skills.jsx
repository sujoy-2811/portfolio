import { skills } from "../../constants";

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative w-full overflow-hidden">
      <div className="container-custom">
        <h2 className="section-heading mb-12">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-vscode-sidebar border border-vscode-activity rounded-lg p-6 hover:border-vscode-accent/50 transition-all font-mono group relative overflow-hidden h-full"
            >
              {/* Icon Background Watermark */}
              <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300 scale-[2.5] grayscale group-hover:grayscale-0 pointer-events-none rotate-12 text-vscode-text">
                {skillGroup.icon}
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded bg-vscode-activity/50 text-vscode-accent text-3xl group-hover:scale-110 transition-all shadow-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-vscode-function group-hover:text-vscode-accent transition-colors">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-mono text-vscode-string bg-vscode-activity/20 rounded border border-vscode-activity/30 hover:bg-vscode-activity/50 transition-all cursor-default"
                  >
                    "{item}"
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

export default Skills;
