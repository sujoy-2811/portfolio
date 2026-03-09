import { heroContent } from "../../constants";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 flex flex-col items-center justify-center overflow-hidden min-h-screen"
    >
      <div className="container-custom max-w-4xl w-full">
        <h2 className="section-heading">Contact</h2>

        {/* Terminal Window */}
        <div className="bg-vscode-bg border border-vscode-activity rounded-lg shadow-2xl overflow-hidden text-left font-mono">
          {/* Terminal Header */}
          <div className="bg-vscode-activity h-8 flex items-center px-4 justify-between border-b border-vscode-bg">
            <div className="flex space-x-2">
              <a
                href="/"
                className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500"
              ></a>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80 hover:bg-green-500"></div>
            </div>
            <div className="text-xs text-vscode-text opacity-60 font-mono">
              zsh — 80x24
            </div>
            <div className="w-4"></div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 text-sm sm:text-base space-y-4 text-vscode-text min-h-[300px] font-mono leading-relaxed">
            <div>
              <span className="text-green-400">➜</span>{" "}
              <span className="text-blue-400">~</span>{" "}
              <span className="text-vscode-text">echo $STATUS</span>
              <br />
              <span className="text-vscode-string">
                "Open for opportunities"
              </span>
            </div>

            <div>
              <span className="text-green-400">➜</span>{" "}
              <span className="text-blue-400">~</span>{" "}
              <div className="inline-block">
                <span className="text-yellow-400">cat</span> contact_info.json
              </div>
              <br />
              <span className="text-yellow-400">{`{`}</span>
              <br />
              &nbsp;&nbsp;
              <span className="text-vscode-variable">"message"</span>:{" "}
              <span className="text-vscode-string">
                "If you have a question or just want to connect, feel free to
                reach out!"
              </span>
              ,
              <br />
              &nbsp;&nbsp;<span className="text-vscode-variable">
                "email"
              </span>:{" "}
              <a
                href={`mailto:${heroContent.socials.email}`}
                className="text-vscode-string underline decoration-dotted hover:text-vscode-accent"
              >{`"${heroContent.socials.email}"`}</a>
              ,
              <br />
              &nbsp;&nbsp;<span className="text-vscode-variable">"github"</span>
              :{" "}
              <a
                href={heroContent.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-vscode-string underline decoration-dotted hover:text-vscode-accent"
              >
                "github.com/sujoy"
              </a>
              ,
              <br />
              &nbsp;&nbsp;
              <span className="text-vscode-variable">"linkedin"</span>:{" "}
              <a
                href={heroContent.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-vscode-string underline decoration-dotted hover:text-vscode-accent"
              >
                "linkedin.com/in/sujoy"
              </a>
              ,
              <br />
              &nbsp;&nbsp;<span className="text-vscode-variable">"action"</span>
              :{" "}
              <a
                href={`mailto:${heroContent.socials.email}`}
                className="text-vscode-function font-bold animate-pulse"
              >
                sendEmail()
              </a>
              <br />
              <span className="text-yellow-400">{`}`}</span>
            </div>

            <div>
              <span className="text-green-400">➜</span>{" "}
              <span className="text-blue-400">~</span>{" "}
              <span className="animate-pulse w-2 h-5 bg-vscode-text inline-block align-middle ml-1"></span>
            </div>
          </div>
        </div>

        <footer className="mt-16 text-vscode-comment text-center text-sm font-mono">
          <p>// Designed & Built by Sujoy Manna</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
