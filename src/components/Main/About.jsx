import { aboutContent } from "../../constants";

const About = () => {
  return (
    <section id="about" className="py-20 w-full relative">
      <div className="container-custom">
        <h2 className="section-heading mb-12">
          <span className="text-vscode-keyword">01.</span> About Me
        </h2>

        <div className="space-y-5">
          {aboutContent.text.map((paragraph, idx) => (
            <p key={idx} className="text-[#8b949e] text-[15px] leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
