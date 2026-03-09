import { aboutContent } from "../../constants";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 relative px-6 md:px-12 w-full max-w-7xl mx-auto"
    >
      <div className="flex flex-col">
        <h2 className="section-heading mb-10">
          <span className="text-vscode-keyword">01.</span> About Me
        </h2>

        <div className="bg-vscode-sidebar border border-vscode-activity rounded-lg p-8 md:p-12 leading-relaxed text-lg text-vscode-text shadow-xl relative overflow-hidden group hover:border-vscode-accent/50 transition-all duration-300 font-mono">
          <div className="absolute top-0 right-0 w-32 h-32 bg-vscode-accent/5 rounded-bl-full transform translate-x-16 -translate-y-16 group-hover:bg-vscode-accent/10 transition-colors"></div>

          <div className="relative z-10 max-w-4xl space-y-6">
            {aboutContent.text.map((paragraph, idx) => (
              <p
                key={idx}
                className="leading-8 text-vscode-text/80 hover:text-vscode-text transition-colors duration-300"
              >
                <span className="text-vscode-comment select-none mr-4 opacity-50">
                  #
                </span>
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
