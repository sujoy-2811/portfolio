import { heroContent } from "../../constants";
import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { SiLeetcode } from "react-icons/si";

const Welcome = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative w-full pt-16"
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl p-10 -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl p-10 -z-10 animate-pulse delay-700"></div>

      <div className="container-custom text-center">
        <p className="subtitle mb-4">Hi, my name is</p>
        <h1 className="text-5xl sm:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-100 to-slate-400 mb-4 tracking-tight">
          {heroContent.name}
        </h1>
        <h2 className="text-2xl sm:text-4xl font-semibold text-slate-400 mb-6">
          {heroContent.role}
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {heroContent.tagline}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
          <a
            href={heroContent.resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            Download Resume
          </a>
          <a
            href={heroContent.socials.email}
            className="btn-secondary w-full sm:w-auto"
          >
            Contact Me
          </a>
        </div>

        <div className="flex items-center justify-center gap-8 text-3xl text-slate-400">
          <a
            href={heroContent.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-all duration-300"
          >
            <BiLogoGithub />
          </a>
          <a
            href={heroContent.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 hover:scale-110 transition-all duration-300"
          >
            <BiLogoLinkedinSquare />
          </a>
          <a
            href={heroContent.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 hover:scale-110 transition-all duration-300"
          >
            <SiLeetcode />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
