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
  role: "Software Developer Engineer | Full-Stack (MERN)",
  tagline: "Building scalable, real-time secure applications.",
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
    "I'm a Software Developer Engineer based in Chennai, currently building scalable full-stack applications. My journey started with a strong curiosity for how systems work under the hood, leading me to pursue a BCA and later an MCA from JAIN University, where I honed my fundamentals in computer science.",
    "I specialize in building scalable applications using React, Next.js, and Node.js. My backend expertise spans both SQL (PostgreSQL) and NoSQL (MongoDB) databases, often paired with Prisma. Additionally, I have deep experience with real-time tech like WebRTC and WebSockets, and DevOps tools such as Docker, Nginx, and AWS EC2.",
    "Beyond development, I have a strong problem-solving mindset, backed by solving 350+ data structure and algorithm problems on LeetCode. I'm passionate about writing clean, maintainable code and constantly exploring new technologies to optimize system performance and user experience.",
  ],
};

export const experience = [
  {
    company: "ThinkMetal",
    role: "Software Developer Engineer",
    period: "02/2025 - Present",
    location: "Chennai, Tamil Nadu",
    points: [
      "Deployed and operated production applications on AWS EC2 using Docker, configuring Nginx Proxy Manager as a secure reverse proxy to expose services with HTTPS/SSL. Built a GitHub Actions-based CI/CD pipeline to automate builds and deployments.",
      "Implemented peer-to-peer WebRTC connections to stream real-time desktop video feeds and enable remote machine control, using Socket.io as a signaling and handshake server.",
      "Designed and built a secure admin panel and backend service using PostgreSQL, Prisma, Zod, RBAC, shadcn/ui, and React Hook Form.",
      "Automated Linux environment setup by creating a reproducible custom ISO for large-scale provisioning, cutting system configuration time by ~30%.",
    ],
  },
  {
    company: "ThinkMetal",
    role: "Software Developer Intern",
    period: "08/2024 - 02/2025",
    location: "Chennai, Tamil Nadu",
    points: [
      "Developed a one-click diagnostic tool using efficient long-polling to monitor machine state, enabling multiple users to diagnose the same machine concurrently.",
      "Customized the Linux environment and automated internal software installation, reducing configuration time by nearly 80%.",
      "Rebuilt legacy pages into fully responsive interfaces and integrated real-time API calls, improving page load time by 15%.",
      "Developed a full-featured internal DevTool using Node.js and SolidJS to streamline daily workflows, improving team efficiency by 50%.",
    ],
  },
];

export const projects = [
  {
    title: "Secure Chat",
    description:
      "Privacy-first real-time chat application using Next.js and Elysia.js.",
    tags: ["Next.js", "Elysia.js", "Redis", "Zod", "TanStack Query"],
    githubLink: "https://github.com/sujoy-2811/secure-chat",
    demoLink: "https://chatroom.sujoymanna.in/",
    details: [
      "Enables secure two-user communication within ephemeral chat rooms.",
      "Implemented automatic room and message destruction using Redis TTLs, with type-safe APIs.",
    ],
  },
  {
    title: "React-Notes",
    description:
      "Notes application with full CRUD features and offline support.",
    tags: ["React", "Local Storage", "Responsive UI"],
    githubLink: "https://github.com/sujoy-2811/react-notes",
    demoLink: "https://notes.sujoymanna.in",
    details: [
      "Built with full CRUD features and offline support using Local Storage.",
      "Designed a clean and intuitive interface focused on smooth day-to-day usability.",
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
