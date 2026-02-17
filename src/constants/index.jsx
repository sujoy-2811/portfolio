import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiJavascript, SiNginx } from "react-icons/si";

export const navLinksData = [
  // {
  //   id: 1,
  //   title: "Start",
  //   link: "home",
  // },
  {
    id: 2,
    title: "About",
    link: "about",
  },
  {
    id: 3,
    title: "Experience",
    link: "experience",
  },
  {
    id: 4,
    title: "Projects",
    link: "projects",
  },
  {
    id: 5,
    title: "Education",
    link: "education",
  },
  {
    id: 6,
    title: "Skills",
    link: "skills",
  },
  {
    id: 7,
    title: "Contact",
    link: "contact",
  },
];

export const heroContent = {
  name: "Sujoy Manna",
  role: "Full-Stack Engineer | System Design",
  tagline: "Building high-performance, real-time applications at scale.",
  resumeLink:
    "https://drive.google.com/file/d/15ftEEo-GzWxuqMZx49lPAjuB2si7Dyu-/view?usp=sharing",
  socials: {
    github: "https://github.com/sujoy-2811",
    linkedin: "https://www.linkedin.com/in/sujoy2811/",
    leetcode: "https://leetcode.com/u/sujoy2811",
    email: "mailto:sujoymanna2811@gmail.com",
    portfolio: "https://portfolio.sujoymanna.in/",
  },
};

export const aboutContent = {
  text: [
    "I am a Full-Stack Engineer dedicated to building robust and scalable systems. My expertise lies in the entire development lifecycle—from backend architecture and database optimization to orchestrating containerized deployments. I focus on delivering high-performance applications that prioritize security and user experience.",
    "My technical stack is centered on efficiency and reliability: React and Next.js for responsive frontends, Node.js and Elysia for high-throughput backends, and modern databases for data persistence. I have specialized experience in implementing real-time communication protocols like WebRTC and WebSockets, as well as streamlining CI/CD pipelines with Docker and AWS.",
    "Driven by a problem-solving mindset, I have solved over 350 algorithmic challenges on LeetCode. I thrive in dynamic environments where technical excellence and clean, maintainable code are the standard.",
  ],
};

export const experience = [
  {
    company: "ThinkMetal",
    role: "Full-Stack Engineer",
    period: "02/2025 - Present",
    location: "Chennai, Tamil Nadu",
    points: [
      "Leading backend and DevOps automation by containerizing the **AWS EC2** infrastructure with **Docker** and establishing secure **Nginx** reverse proxies.",
      "Architected a scalable peer-to-peer video streaming solution for remote machine diagnostics, leveraging **WebRTC** and **Socket.io** for real-time signaling.",
      "Designed and deployed a secure admin dashboard using **React Hook Form**, **Zod**, and **Prisma ORM**, enforcing strict Role-Based Access Control (RBAC).",
      "Streamlined deployment workflows by automating Linux environment provisioning, reducing setup time by **~30%** and improving consistency across environments.",
    ],
  },
  {
    company: "ThinkMetal",
    role: "Software Engineer Intern",
    period: "08/2024 - 02/2025",
    location: "Chennai, Tamil Nadu",
    points: [
      "Engineered a real-time diagnostic tool utilizing efficient long-polling, enabling concurrent machine monitoring for multiple clients.",
      "Optimized internal tooling deployment by automating software installations on Linux, reducing configuration overhead by nearly **80%**.",
      "Modernized legacy user interfaces into responsive, high-performance applications, improving page load speeds by **15%**.",
      "Developed a custom internal developer tool using **Node.js** and **SolidJS**, which increased daily team workflow efficiency by **50%**.",
    ],
  },
];

export const projects = [
  {
    title: "Secure Chat",
    description: "A privacy-focused, real-time communication platform.",
    tags: ["Next.js", "Elysia.js", "Redis", "Zod", "TanStack Query"],
    githubLink: "https://github.com/sujoy-2811/secure-chat",
    demoLink: "https://chatroom.sujoymanna.in/",
    details: [
      "Engineered a zero-persistence messaging system ensuring maximum user privacy through ephemeral chat rooms.",
      "Implemented automated data expiration using Redis TTLs, with strictly typed API contracts for reliability.",
    ],
  },
  {
    title: "React-Notes",
    description: "A robust, offline-first productivity application.",
    tags: ["React", "Local Storage", "Responsive UI"],
    githubLink: "https://github.com/sujoy-2811/react-notes",
    demoLink: "https://notes.sujoymanna.in",
    details: [
      "Developed a full-featured CRUD application with seamless offline synchronization via Local Storage.",
      "Optimized UX with a clean, responsive interface designed for efficient information management.",
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Java", "SQL"],
    icon: <SiJavascript size={40} className="text-yellow-400" />,
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Three.js/Fiber",
      "Framer Motion",
      "shadcn/ui",
      "React Hook Form",
    ],
    icon: <FaReact size={40} className="text-cyan-400" />,
  },
  {
    category: "Backend & DB",
    items: [
      "Node.js",
      "Express.js",
      "Elysia.js",
      "Prisma",
      "Zod",
      "MongoDB",
      "PostgreSQL",
      "Redis",
    ],
    icon: <FaNodeJs size={40} className="text-green-500" />,
  },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Nginx", "AWS EC2", "GitHub Actions", "Linux", "Git"],
    icon: <FaDocker size={40} className="text-blue-500" />,
  },
  {
    category: "Realtime & Security",
    items: [
      "WebRTC",
      "Socket.io",
      "TanStack Query",
      "JWT Auth",
      "Reverse Proxy",
    ],
    icon: <SiNginx size={40} className="text-green-600" />,
  },
];

export const education = [
  {
    institution: "JAIN (Deemed-to-be University)",
    degree: "Master of Computer Applications (Full Stack Development)",
    location: "Bengaluru, Karnataka, India",
    period: "2023 - 2025",
    score: "92.2%",
  },
  {
    institution: "Panjab University",
    degree: "Bachelor of Computer Applications",
    location: "Chandigarh, India",
    period: "2019 - 2022",
    score: "82.9%",
  },
];
