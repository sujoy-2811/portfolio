import { BiLogoGithub } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";

import work from "../../assets/work.png";
const About = () => {
  return (
    // . container
    <section
      id="home"
      className=" flex flex-col items-center mt-4 mb-16 mx-6 sm:mt-20 sm:mb-36 sm:flex-row  sm:justify-around"
    >
      {/*  . part 1 */}
      <div className=" order-2 mb-4 sm:order-2 sm:w-[45%]">
        <img className=" md-8 w-screen" src="welcome.svg" alt="my Image" />
      </div>
      {/* part 2 */}
      <div className=" flex flex-col justify-center items-start my-3  sm:order-1 sm:w-[45%] ">
        <h2 className="text-2xl font-semibold mb-1 sm:text-3xl sm:mb-3">
          Hi , i am Sujoy
        </h2>
        <h1 className="  text-3xl font-bold mb-3 sm:text-5xl sm:mb-5">
          Full Stack Developer
        </h1>
        <p className="text-skin-muted  text-xl sm:text-2xl sm:mb-4 ">
          I love bringing ideas to life with sleek designs using code.
        </p>
        {/* part 3 */}
        <div className="flex space-x-2 items-center ">
          <div className="rounded-xl text-xl my-3  px-1  bg-skin-button-accent text-skin-inverted  cursor-pointer sm:text-3xl sm:p-2 hover:bg-skin-button-accent-hover">
            <a
              href="https://drive.google.com/file/d/15ftEEo-GzWxuqMZx49lPAjuB2si7Dyu-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
          <button className=" text-3xl cursor-pointer sm:text-5xl hover:text-skin-muted">
            <a
              href="https://github.com/Sujoy-2811"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoGithub />
            </a>
          </button>
          <button className=" text-3xl cursor-pointer sm:text-5xl hover:text-skin-muted">
            <a
              href="https://www.linkedin.com/in/sujoy2811"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoLinkedinSquare />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
