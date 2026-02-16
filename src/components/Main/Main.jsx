import Welcome from "./Welcome";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import Contact from "./Contact";

const Main = () => {
  return (
    <main className="w-full relative z-0">
      <Welcome />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Contact />
    </main>
  );
};

export default Main;
