import { education } from "../../constants";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-slate-800/20 w-full relative">
      <div className="container-custom">
        <h2 className="section-heading mb-12">Education</h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card flex flex-col sm:flex-row items-center sm:items-start justify-between p-8 sm:p-10 border-l-4 border-l-sky-500 rounded-xl relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-sky-500/5 group-hover:bg-sky-500/10 transition-all duration-300 pointer-events-none"></div>

              <div className="relative z-10 w-full mb-6 sm:mb-0">
                <h3 className="text-2xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors mb-2">
                  {edu.degree}
                </h3>
                <span className="text-sky-400 font-medium block mb-3 text-lg">
                  {edu.institution}
                </span>
                <div className="text-slate-400 text-sm flex items-center gap-2">
                  <span className="opacity-70 font-mono tracking-wide">
                    LOCATION:
                  </span>
                  <span className="font-semibold text-slate-300">
                    {edu.location}
                  </span>
                </div>
              </div>

              <div className="relative z-10 w-full sm:w-auto text-center sm:text-right flex-shrink-0">
                <span className="block text-2xl font-bold text-sky-400 mb-1">
                  {edu.score}
                </span>
                <span className="block text-slate-500 text-xs uppercase tracking-widest font-bold">
                  Grade / Score
                </span>
                <span className="block text-slate-400 text-sm mt-3 font-mono bg-slate-900/50 px-3 py-1 rounded inline-block">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
