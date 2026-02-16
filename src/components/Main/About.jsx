import { aboutContent } from "../../constants";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 relative px-6 md:px-12 w-full max-w-7xl mx-auto"
    >
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold mb-10 text-slate-100 flex items-center gap-4">
          <span className="text-sky-400">01.</span> About Me
          <span className="h-px bg-slate-700 flex-grow max-w-[200px]"></span>
        </h2>

        <div className="glass-card p-8 md:p-12 leading-relaxed text-lg text-slate-300 shadow-xl backdrop-blur-sm bg-slate-800/40 border border-slate-700/50 rounded-2xl relative overflow-hidden group hover:border-sky-500/30 transition-all duration-300">
          <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:bg-sky-500/10 transition-colors"></div>

          <div className="relative z-10 max-w-4xl space-y-6">
            {aboutContent.text.map((paragraph, idx) => (
              <p
                key={idx}
                className="leading-8 font-light tracking-wide text-slate-400 hover:text-slate-200 transition-colors duration-300"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
