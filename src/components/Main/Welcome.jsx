import { heroContent } from "../../constants";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

const Welcome = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center p-6 sm:p-12 relative overflow-hidden font-mono pt-20"
    >
      {/* Background Effects - Clean Spotlight */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vscode-accent/5 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-vscode-function/5 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none"></div>

      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text Information */}
        <div>
          <p className="text-vscode-keyword text-lg mb-2">Hello, World!</p>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-2">
            I am{" "}
            <span className="text-vscode-function">{heroContent.name}</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-vscode-comment mb-6">
            {" "}
            &gt; {heroContent.role}
          </h2>
          <p className="text-vscode-text text-lg leading-relaxed mb-8 max-w-lg border-l-2 border-vscode-activity pl-4">
            {heroContent.tagline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={heroContent.resumeLink}
              download="Sujoy_Manna_Resume.pdf"
              className="bg-vscode-accent text-white px-6 py-3 rounded hover:bg-vscode-accent/80 transition-colors font-semibold text-center"
            >
              downloadResume()
            </a>
            <a
              href="#contact"
              className="border border-vscode-activity text-vscode-text px-6 py-3 rounded hover:bg-vscode-activity/50 transition-colors text-center"
            >
              contactMe()
            </a>
          </div>

          <div className="flex gap-6 mt-12 text-3xl text-vscode-text/60">
            <a
              href={heroContent.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-vscode-text hover:scale-110 transition-all"
            >
              <BiLogoGithub />
            </a>
            <a
              href={heroContent.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-vscode-text hover:scale-110 transition-all"
            >
              <BiLogoLinkedinSquare />
            </a>
            <a
              href={heroContent.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-vscode-text hover:scale-110 transition-all"
            >
              <SiLeetcode />
            </a>
          </div>
        </div>

        {/* Right Column: Code Editor Mockup */}
        <div className="w-full relative mt-10 lg:mt-0">
          <div className="bg-vscode-sidebar border border-vscode-activity rounded-lg shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
            {/* Tab Bar */}
            <div className="bg-vscode-activity h-8 flex items-center px-4 border-b border-vscode-bg/50">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="text-xs text-vscode-text opacity-80 flex items-center bg-vscode-bg px-3 py-1 rounded-t border-t-2 border-vscode-accent">
                <span className="mr-2 text-yellow-400">JS</span>{" "}
                portfolio.config.js
              </div>
            </div>

            {/* Code Content */}
            <div className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm md:text-base leading-relaxed bg-vscode-bg">
              <div className="font-mono whitespace-nowrap">
                <div>
                  <span className="text-gray-600 select-none mr-2 sm:mr-4">
                    1
                  </span>
                  <span className="text-vscode-keyword">const</span>{" "}
                  <span className="text-vscode-function">developer</span>{" "}
                  <span className="text-vscode-keyword">=</span>{" "}
                  <span className="text-vscode-text">{`{`}</span>
                </div>
                <div>
                  <span className="text-gray-600 select-none mr-2 sm:mr-4">
                    2
                  </span>
                  &nbsp;&nbsp;<span className="text-vscode-variable">name</span>
                  :{" "}
                  <span className="text-vscode-string">
                    "{heroContent.name}"
                  </span>
                  ,
                </div>
                <div>
                  <span className="text-gray-600 select-none mr-2 sm:mr-4">
                    3
                  </span>
                  &nbsp;&nbsp;
                  <span className="text-vscode-variable">skills</span>: [
                  <span className="text-vscode-string">"React"</span>,{" "}
                  <span className="text-vscode-string">"Node"</span>,{" "}
                  <span className="text-vscode-string">"Database"</span>
                  ],
                </div>
                <div>
                  <span className="text-gray-600 select-none mr-2 sm:mr-4">
                    4
                  </span>
                  &nbsp;&nbsp;
                  <span className="text-vscode-variable">hardWorker</span>:{" "}
                  <span className="text-vscode-keyword">true</span>,
                </div>
                <div>
                  <span className="text-gray-600 select-none mr-2 sm:mr-4">
                    5
                  </span>
                  &nbsp;&nbsp;
                  <span className="text-vscode-function">
                    problemSolver
                  </span>: <span className="text-vscode-keyword">function</span>
                  () {`{`}
                </div>
                <div>
                  <span className="text-gray-600 select-none mr-2 sm:mr-4">
                    6
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-vscode-keyword">return</span>{" "}
                  <span className="text-vscode-keyword">true</span>;
                </div>
                <div>
                  <span className="text-gray-600 select-none mr-2 sm:mr-4">
                    7
                  </span>
                  &nbsp;&nbsp;{`}`},
                </div>
                <div>
                  <span className="text-gray-600 select-none mr-2 sm:mr-4">
                    8
                  </span>
                  &nbsp;&nbsp;
                  <span className="text-vscode-function">hireable</span>:{" "}
                  <span className="text-vscode-function">function</span>() {`{`}
                </div>
                <div>
                  <span className="text-gray-600 select-none mr-2 sm:mr-4">
                    9
                  </span>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="text-vscode-keyword">return</span>{" "}
                  <span className="text-vscode-keyword">true</span>;
                </div>
                <div>
                  <span className="text-gray-600 select-none mr-2 sm:mr-4">
                    10
                  </span>
                  &nbsp;&nbsp;{`}`}
                </div>
                <div>
                  <span className="text-gray-600 select-none mr-2 sm:mr-4">
                    11
                  </span>
                  <span className="text-vscode-text">{`}`}</span>;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
