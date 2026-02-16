import { skills } from "../../constants";

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative w-full overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>

      <div className="container-custom">
        <h2 className="section-heading mb-12">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="glass-card group relative overflow-hidden p-6 hover:bg-slate-800/60 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon Background Watermark */}
              <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity duration-300 scale-[2.5] grayscale group-hover:grayscale-0 pointer-events-none rotate-12">
                {skillGroup.icon}
              </div>

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-3xl group-hover:scale-110 group-hover:text-white transition-all duration-300 shadow-lg shadow-sky-500/5 group-hover:shadow-sky-500/20">
                  {skillGroup.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 relative z-10">
                {skillGroup.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs sm:text-sm font-mono text-slate-400 bg-slate-900/40 border border-slate-700/30 rounded-md hover:border-sky-500/40 hover:text-sky-300 hover:bg-sky-500/5 transition-all duration-300 cursor-default"
                  >
                    {item}
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
