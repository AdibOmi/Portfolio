export const projects = [
  {
    id: "gainframe",
    title: "Gainframe",
    tagline: "See the gains you couldn't see",
    problem: "Progress in muscle building or fat loss is often too gradual to notice — killing motivation before results arrive.",
    description: "AI-powered physique tracking app that uses computer vision to detect and highlight subtle body composition changes over time — shoulders, waist, posture — giving users clear visual proof of progress when the mirror doesn't cut it.",
    stack: ["React", "FastAPI", "PostgreSQL", "OpenCV", "MediaPipe"],
    github: "https://github.com/AdibOmi",
    live: null,
    image: "/images/gainframe.png", // replace with actual screenshot
    status: "In Progress",
    highlight: true,
  },
  {
    id: "crowd-control",
    title: "Crowd Control",
    tagline: "Know before you go",
    problem: "Wasted trips to crowded venues — and for businesses, unpredictable footfall means lost off-peak revenue.",
    description: "Real-time occupancy platform that processes live CCTV footage using computer vision to estimate venue density. Gives business owners a footfall dashboard and tools to drive off-peak traffic — turning crowd data into a revenue lever.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "OpenCV"],
    github: "https://github.com/AdibOmi",
    live: null,
    image: "/images/crowd-control.png",
    status: "In Progress",
    highlight: true,
  },
  {
    id: "deja-view",
    title: "Deja View",
    tagline: "Your personal movie memory",
    problem: "Picking a movie to rewatch — or recommend to others — is surprisingly hard without a record of what you actually enjoyed.",
    description: "Movie tracking app where users log, rate, and annotate watched films. A recommendation engine surfaces similar titles based on highest-rated entries, helping users rediscover favourites and find new ones aligned to their taste.",
    stack: ["Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/AdibOmi/Deja-View",
    live: null,
    image: "/images/deja-view.png",
    status: "Completed",
    highlight: false,
  },
  {
    id: "pump-fiction",
    title: "Pump Fiction",
    tagline: "Track every rep, see every gain",
    problem: "Gym-goers lack a clean cross-platform tool to log workouts and visualise strength gains over time.",
    description: "Cross-platform mobile fitness app for logging exercises, tracking sets and reps, and visualising progress through charts. Designed end-to-end in Figma and built as a fully deployed Flutter app.",
    stack: ["Flutter", "Dart"],
    github: "https://github.com/AdibOmi/Pump-Fiction",
    live: null,
    image: "/images/pump-fiction.png",
    status: "Completed",
    highlight: false,
  },
];

export const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "C++", "Dart"] },
  { category: "Frontend", items: ["React", "React Native", "Flutter"] },
  { category: "Backend", items: ["FastAPI", "Node.js"] },
  { category: "Databases", items: ["PostgreSQL", "MySQL", "Supabase"] },
  { category: "CV & AI", items: ["OpenCV", "MediaPipe", "OpenAI API"] },
  { category: "Tools", items: ["Git", "GitHub", "Figma"] },
];

export const about = {
  name: "Adib Ahmed",
  role: "Software Engineer & Builder",
  university: "Islamic University of Technology (IUT)",
  degree: "B.Sc. Computer Science & Engineering",
  graduating: "2025",
  bio: [
    "I build things that solve problems I've personally run into. Most of my projects started as frustrations — wasted gym trips, forgotten movies, invisible fitness progress.",
    "I'm a final-year CSE student at IUT with a strong interest in computer vision, full-stack development, and eventually, building my own company.",
    "I'm open to backend, frontend, or full-stack roles where I can ship real things fast."
  ],
  email: "adibahmed@iut-dhaka.edu",
  github: "https://github.com/AdibOmi",
  linkedin: "https://linkedin.com/in/adib-ahmed", // update with real URL
};
