// All portfolio content lives here. Edit the text in this file only;
// the components update automatically.
//
// PHOTOS
//   Profile photo      -> public/images/profile.png
//   Project screenshots -> public/images/projects/<name>.png
// If a file is missing, a placeholder box is shown instead.

export const profile = {
  name: "Nanda Valeri",
  initials: "NV",
  email: "valerinanda@gmail.com",
  phone: "+62 877-7914-9122",
  phoneHref: "https://wa.me/6287779149122",
  website: "https://alestuff404.github.io",
  location: "Tangerang, Indonesia",
  status: "Open to internships",
  role: "Project Manager × FullStack Web Developer",
  photo: "/images/profile.png",
  headline: {
  before: "Hi, I'm Nanda.\nI build products that",
  accent: "matter."},
  intro:
    "Informatics student at Universitas Multimedia Nusantara. I build full-stack web apps and apply machine learning to real problems like waste management, agricultural verification, and chatbot automation. National 1st place in Web Development and KAMI UMN scholarship recipient.",
  links: {
    github: "https://github.com/alestuff404",
    linkedin: "", // add your LinkedIn URL here; leave empty to hide it
  },
};

export const nav = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: "3.50", label: "Current GPA" },
  { value: "1st", label: "National Web Dev" },
  { value: "Rp20M+", label: "Launch ticket sales" },
  { value: "50+", label: "Workshop students" },
];

export const marquee = [
  "REACT · NEXT.JS",
  "TYPESCRIPT",
  "TAILWIND CSS",
  "NODE.JS · EXPRESS",
  "POSTGRESQL · SUPABASE",
  "PYTHON",
  "YOLOV8 · COMPUTER VISION",
  "LLM · CLAUDE",
  "REACT NATIVE · EXPO",
  "FIGMA · CANVA",
];

export type Project = {
  title: string;
  tag: string;
  image: string; // screenshot path inside /public
  tech: string[];
  description: string;
  highlight?: string;
  link?: string; // GitHub or live demo URL; the button appears when filled
};

export const projects: Project[] = [
  {
    title: "Lembar Janji",
    tag: "Web App · AI",
    image: "/images/projects/lembar-janji.png",
    highlight: "4th Place, IFEST Unpad Hackathon (National)",
    tech: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Vision LLM API", "PostgreSQL", "Vitest", "Vercel"],
    description:
      "A web app that turns job-offer images for prospective migrant workers into a shareable checklist of what the offer states and what it leaves unanswered under Indonesia's Migrant Worker Protection Law. The LLM is used only for image extraction; all assessment logic runs on deterministic, tested rules.",
  },
  {
    title: "PulangKeMerek",
    tag: "Web App · Edge AI",
    image: "/images/projects/pulangkemerek.png",
    highlight: "1st Place, I/O Festival Web Development (National)",
    tech: ["React", "Tailwind CSS", "Redis", "YOLOv8", "Computer Vision"],
    description:
      "An AI-powered waste management infrastructure that connects processing facilities to corporate dashboards. It uses Edge AI to verify physical packaging automatically and delivers closed-loop data for ESG and environmental audits.",
  },
  {
    title: "JejakHijau",
    tag: "Platform · Agritech",
    image: "/images/projects/jejakhijau.png",
    tech: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Supabase", "Crypto.js", "Turf.js", "MapLibre GL"],
    description:
      "A two-sided platform that turns field documentation into economic access for farmers. It includes a fully offline verification system that checks farm plots against the JRC Global Forest Cover 2020 deforestation map and issues a secure, farmer-owned digital passport.",
  },
  {
    title: "Kuali",
    tag: "AI Assistant",
    image: "/images/projects/kuali.png",
    tech: ["React", "Tailwind CSS", "Node.js", "PostgreSQL", "Supabase", "LLM Claude"],
    description:
      "An AI assistant that converts messy WhatsApp order chats into structured orders, payment reminders, ingredient and production planning, and daily recaps. I designed the LLM parsing pipeline (chat → structured JSON) and the overall product architecture.",
  },
  {
    title: "bisasinema.id",
    tag: "Website · Client",
    image: "/images/projects/bisasinema.png",
    highlight: "Rp20M+ in ticket sales at launch",
    tech: ["React", "Tailwind CSS", "Nest.js", "Midtrans"],
    description:
      "The official website of an educational film and content-production platform offering workshops, e-courses, and a creative community. Built with a development team, it generated over Rp20 million in early launch ticket sales and top organic search visibility without ads.",
  },
  {
    title: "CIMB Niaga Digital Account Opening",
    tag: "Mobile App",
    image: "/images/projects/cimb-niaga.png",
    highlight: "2nd Place, Pitching Day UMN × CIMB Niaga",
    tech: ["React Native", "Expo Go"],
    description:
      "A functional mobile app for CIMB Niaga's digital account opening, built in a team-based academic project. Focused on UX, with accessible color choices for elderly users that keep the brand consistent, and presented at an industry-level pitching event.",
  },
];

export const experience = [
  {
    period: "May 2026 — Present",
    role: "Freelance Private Tutor",
    org: "KodioKids & CodingStudio",
    points: [
      "Teach private coding lessons to children aged 6–17.",
      "Subjects: Roblox Development, Python Development, and Scratch.",
    ],
  },
  {
    period: "Jul 2026 — Present",
    role: "Coding Club Instructor",
    org: "SMP Islam Al Azhar 41 Summarecon Serpong",
    points: [
      "Teach extracurricular coding classes to junior high school students.",
      "Subjects: Web Development and Python for AI.",
    ],
  },
  {
    period: "Dec 2025 — Present",
    role: "Project Manager",
    org: "bisasinema.id",
    points: [
      "Built the official website for an educational film and content-production platform with workshops, e-courses, and a creative community.",
      "Contributed to winning the website development tender and managed end-to-end project execution and front-end implementation (React + Tailwind CSS).",
    ],
  },
  {
    period: "Dec 2025 — Present",
    role: "Content & Web Design Intern",
    org: "KAMI UMN",
    points: [
      "Planned monthly social media content and strategy to boost alumni engagement and awareness.",
      "Designed alumni bulletins and publication materials in Canva.",
      "Created high-fidelity wireframes and responsive UI mockups in Figma to improve the KAMI UMN website.",
    ],
  },
];

export const leadership = [
  {
    period: "Jan 2026 — Present",
    role: "Sponsorship Division Coordinator",
    org: "Mister & Miss UMN 2026",
    note: "Lead sponsor outreach and negotiations, develop partnership proposals, and manage sponsor relationships and agreements.",
  },
  {
    period: "Mar 2025 — Present",
    role: "Member · Workshop Speaker",
    org: "AI Community UMN",
    note: "Spoke at the AI Lab workshop, explaining CNN and Computer Vision through a clothing detection demo for 50+ high school students.",
  },
  {
    period: "Dec 2025",
    role: "Liaison Officer",
    org: "National Youth Researcher Competition 2025",
    note: "Coordinated schedules and logistics for multiple student delegations to keep the competition running smoothly.",
  },
  {
    period: "Sep 2025",
    role: "Liaison Officer",
    org: "Garuda Hacks 6.0",
    note: "Bridged communication between participants, mentors, and the organizing team throughout the event.",
  },
  {
    period: "Dec 2024 — Sep 2025",
    role: "Sponsorship Division Coordinator",
    org: "Fikom Night",
    note: "Secured over IDR 20,000,000 in cash, discounts, products, and services from sponsors.",
  },
];

export const education = [
  {
    period: "2024 — Present",
    title: "Bachelor of Informatics",
    place: "Universitas Multimedia Nusantara",
    note: "Current GPA: 3.50",
  },
  {
    period: "2020 — 2022",
    title: "Science Major (High School)",
    place: "SMAN 2 Kota Serang",
    note: "",
  },
];

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript"],
  "Frameworks & Libraries": ["React", "React Native", "Next.js", "Node.js", "Express.js", "Tailwind CSS"],
  "Machine Learning": ["LSTM", "Random Forest", "XGBoost", "Classification", "Predictive Modeling", "YOLOv8", "Computer Vision"],
  "Tools & Platforms": ["Figma", "Canva", "GitHub"],
  "Soft Skills": ["Leadership", "Team Collaboration", "Public Speaking", "Negotiation", "Event Management", "Content Writing"],
};

export const certifications = [
  { date: "Feb 2026", title: "Cloud Fundamentals & Generative AI on AWS (Basic)", issuer: "Dicoding Academy" },
  { date: "Oct 2025", title: "Data Visualization (Fundamentals)", issuer: "Dicoding Academy" },
  { date: "Aug 2025", title: "AI Training", issuer: "Generation Girl's Academy" },
  { date: "May 2025", title: "AI", issuer: "Dicoding Academy" },
];

export const achievements = [
  {
    date: "Aug 2026",
    title: "4th Place — IFEST Universitas Padjadjaran Hackathon",
    level: "National",
    note: "Presented the Lembar Janji project.",
  },
  {
    date: "Jun 2026",
    title: "1st Place — I/O Festival Web Development Competition",
    level: "National",
    note: "Presented the PulangKeMerek project.",
  },
  {
    date: "Dec 2025",
    title: "2nd Place — Pitching Day UMN × CIMB Niaga",
    level: "Campus",
    note: "Presented the CIMB Niaga Digital Account Opening mobile app.",
  },
  {
    date: "Nov 2025 — Present",
    title: "KAMI UMN Scholarship Awardee",
    level: "Scholarship",
    note: "Selected for academic performance, organizational involvement, and campus contributions.",
  },
];
