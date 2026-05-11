export const siteConfig = {
  name: "Abhijeet Shrimali",
  shortName: "Abhijeet",
  role: "Full Stack Web Developer",
  specialization: "React, PHP, and .NET",
  tagline: "Full stack web developer building clean, scalable apps with strong frontend and backend fundamentals.",
  description:
    "Full Stack Developer skilled in React, PHP, and .NET, focused on clean code, dynamic web apps, and improving user experience.",
  intro:
    "I enjoy building responsive interfaces, writing maintainable backend logic, and helping turn technical concepts into practical project work.",
  availability: "Open to work",
  email: "abbi.shrimali@gmail.com",
  phone: "+92 311 2964673",
  github: "https://github.com/Abshrimali",
  linkedin: "https://www.linkedin.com/in/abhijeet-shrimali-39aa20224",
  website: "",
  resumeUrl: "/Abhijeet_Shrimali_Resume.docx",
  heroHeadline: {
    lead: "dynamic web apps",
    accent: "built clean and scalable.",
  },
  portrait: {
    src: "/profile-photo.jpg",
    fallbackSrc: "/profile-photo.svg",
    alt: "Portrait of Abhijeet Shrimali",
    initials: "AS",
  },
  focusAreas: [
    "React interfaces",
    "PHP and .NET builds",
    "Technical instruction",
  ],
  heroMetrics: [
    { value: "30+", label: "Students supported" },
    { value: "16", label: "Public repos" },
    { value: "04", label: "Key focus areas" },
  ],
  heroCards: {
    roleLabel: "Current focus",
    roleValue: "Full-stack learning and project delivery",
    strengthLabel: "Strength",
    strengthValue: "Clear code with practical problem solving",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#highlights" },
  { label: "Contact", href: "#contact" },
];

export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export const skills: Skill[] = [
  { name: "JavaScript", icon: "FileCode", category: "frontend" },
  { name: "React", icon: "Atom", category: "frontend" },
  { name: "HTML", icon: "Code2", category: "frontend" },
  { name: "CSS", icon: "Palette", category: "frontend" },
  { name: "TypeScript", icon: "FileType", category: "frontend" },
  { name: "Next.js", icon: "Globe", category: "frontend" },
  { name: "Node.js", icon: "Server", category: "backend" },
  { name: "Express.js", icon: "Zap", category: "backend" },
  { name: "PHP", icon: "Code2", category: "backend" },
  { name: ".NET", icon: "Layers", category: "backend" },
  { name: "REST APIs", icon: "Network", category: "backend" },
  { name: "MongoDB", icon: "Database", category: "database" },
  { name: "MySQL", icon: "Table", category: "database" },
  { name: "Git", icon: "GitBranch", category: "tools" },
  { name: "GitHub", icon: "Github", category: "tools" },
  { name: "Vercel", icon: "Cloud", category: "tools" },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

export const experiences: Experience[] = [
  {
    role: "Teaching Assistant",
    company: "Aptech Shahrah-e-Faisal",
    location: "Karachi, Pakistan",
    period: "Current",
    description: [
      "Assisted in teaching web development topics including HTML, CSS, and JavaScript to more than 30 students.",
      "Debugged student coding issues in real time and supported lab sessions with hands-on project help.",
      "Helped students build mini web projects while reinforcing core concepts and problem-solving skills.",
    ],
    skills: ["HTML", "CSS", "JavaScript", "Teaching", "Debugging"],
  },
  {
    role: "Student Developer",
    company: "Aptech Learning Pakistan",
    location: "Karachi, Pakistan",
    period: "In progress",
    description: [
      "Developing coursework web applications using PHP and .NET with responsive frontend work in HTML, CSS, and JavaScript.",
      "Gaining practical experience with backend logic, database integration, and MySQL-driven application features.",
    ],
    skills: ["React", "PHP", ".NET", "MySQL", "Full Stack"],
  },
];

export interface Project {
  title: string;
  label: string;
  description: string;
  longDescription: string;
  techStack: string[];
  features: string[];
  github: string;
  live: string;
  accent: string;
  surface: string;
}

export const projects: Project[] = [
  {
    title: "Aptech Web Projects",
    label: "Coursework Build",
    description:
      "Coursework projects using PHP and .NET to build dynamic web apps with responsive frontends and MySQL-backed logic.",
    longDescription:
      "A set of coursework builds focused on full-stack fundamentals, backend logic, and practical database integration.",
    techStack: ["PHP", ".NET", "HTML", "CSS", "JavaScript", "MySQL"],
    features: [
      "Dynamic web application coursework",
      "Responsive user interfaces",
      "Backend logic with MySQL integration",
    ],
    github: "https://github.com/Abshrimali",
    live: "#",
    accent: "#fb7185",
    surface:
      "linear-gradient(135deg, rgba(190, 24, 93, 0.9), rgba(136, 19, 55, 0.92))",
  },
  {
    title: "MERN Portfolio",
    label: "Full-Stack Portfolio",
    description:
      "Portfolio app with a React frontend, Express backend, MongoDB-ready setup, and a contact workflow designed for real deployment.",
    longDescription:
      "A portfolio build that blends frontend presentation with backend structure and deployable project organization.",
    techStack: ["React", "Express", "MongoDB", "Three.js", "Vite"],
    features: [
      "Separate frontend and backend structure",
      "Contact endpoint and GitHub sync support",
      "Portfolio content designed for deployment",
    ],
    github: "https://github.com/Abshrimali/mern-portfolio",
    live: "https://mern-portfolio-pi.vercel.app",
    accent: "#6ee7b7",
    surface:
      "linear-gradient(135deg, rgba(15, 118, 110, 0.92), rgba(17, 94, 89, 0.94))",
  },
  {
    title: "Weather API Dashboard",
    label: "API Integration",
    description:
      "Frontend weather project built around external API calls, async state handling, and a cleaner day-to-day product UI.",
    longDescription:
      "An app that helped sharpen API consumption, loading states, and practical UI feedback for users.",
    techStack: ["React", "JavaScript", "API Integration", "CSS"],
    features: [
      "External weather API integration",
      "Async request and state handling",
      "Responsive weather-focused interface",
    ],
    github: "https://github.com/Abshrimali/Weather_API",
    live: "#",
    accent: "#7dd3fc",
    surface:
      "linear-gradient(135deg, rgba(14, 116, 144, 0.92), rgba(30, 64, 175, 0.92))",
  },
  {
    title: "REST API Express",
    label: "Backend Practice",
    description:
      "Express-based backend practice repository centered on routes, controllers, and cleaner REST-style server organization.",
    longDescription:
      "A backend-focused project used to strengthen Express fundamentals and API thinking.",
    techStack: ["Node.js", "Express", "JavaScript", "REST API"],
    features: [
      "Express server structure",
      "REST-oriented route organization",
      "Hands-on backend learning repo",
    ],
    github: "https://github.com/Abshrimali/REST_API_Express",
    live: "#",
    accent: "#f59e0b",
    surface:
      "linear-gradient(135deg, rgba(180, 83, 9, 0.92), rgba(146, 64, 14, 0.94))",
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

export const stats: Stat[] = [
  { value: 16, suffix: "", label: "Public Repos", icon: "FolderGit2" },
  { value: 4, suffix: "", label: "Featured Projects", icon: "Briefcase" },
  { value: 30, suffix: "+", label: "Students Helped", icon: "Users" },
  { value: 7, suffix: "+", label: "Core Technologies", icon: "Code2" },
];

export const aboutHighlights = [
  {
    title: "Full-Stack Range",
    description: "Works across React interfaces, backend logic, and database-connected app flows.",
    icon: "Layers",
  },
  {
    title: "Teaching Support",
    description: "Comfortable explaining concepts, debugging issues, and helping others build working projects.",
    icon: "Zap",
  },
  {
    title: "Responsive UI",
    description: "Builds interfaces with attention to usability, structure, and cleaner user experience.",
    icon: "Code2",
  },
  {
    title: "Steady Growth",
    description: "Actively growing through coursework, public repos, and ongoing computer science studies.",
    icon: "Palette",
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  date: string;
  description: string;
  icon: string;
}

export const certificates: Certificate[] = [
  {
    title: "BSCS",
    issuer: "Virtual University of Pakistan",
    date: "In progress",
    description:
      "Bachelor of Science in Computer Science with ongoing focus on software fundamentals and development.",
    icon: "Layers",
  },
  {
    title: "ADSE",
    issuer: "Aptech Learning Pakistan",
    date: "In progress",
    description:
      "Advance Diploma in Software Engineering with practical work in web development and application building.",
    icon: "Database",
  },
  {
    title: "SBTE Bridge Course",
    issuer: "Aptech Learning Pakistan",
    date: "April 2024",
    description:
      "Completed the bridge course covering the SBTE equivalence of HDSE to DAE.",
    icon: "Globe",
  },
  {
    title: "Soft Skills & Languages",
    issuer: "Personal strengths",
    date: "Ongoing",
    description:
      "Strong teamwork, time management, communication, and problem solving with English, Urdu, and Gujarati.",
    icon: "FileCode",
  },
];
