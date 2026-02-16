import { heroContent } from "../../constants";

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative text-center">
      <div className="container-custom">
        <p className="subtitle mb-6">What's Next?</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-100 mb-8">
          Get In Touch
        </h2>

        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          I am currently working as a Software Engineer, but my inbox is always
          open. Whether you have a question, a potential opportunity to discuss,
          or just want to say hi, I'll try my best to get back to you!
        </p>

        <a
          href={heroContent.socials.email}
          className="btn-primary px-8 py-4 text-lg shadow-sky-500/20 shadow-lg hover:shadow-sky-500/40 transform hover:-translate-y-1 transition-all"
        >
          Say Hello
        </a>

        <footer className="mt-32 text-slate-600 text-sm font-mono">
          <p>Designed & Built by Sujoy Manna</p>
          <div className="flex justify-center gap-6 mt-4 opacity-50 hover:opacity-100 transition-opacity">
            <a
              href={heroContent.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              GitHub
            </a>
            <a
              href={heroContent.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              LinkedIn
            </a>
            <a
              href={heroContent.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400"
            >
              LeetCode
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
