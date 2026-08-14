export const projects = [
  {
    id: "outpace",
    title: "Outpace",
    tagline: "The world's greatest agentic SDR",
    problem:
      "Early-stage founders and small teams don't have a full sales headcount, so the manual grunt work of prospecting and outreach either doesn't happen or eats the time they should be spending building.",
    description:
      "Outpace is an agentic SDR platform that ingests a sales rep's own research guide, email template, and outreach cadence, then autonomously researches prospects, drafts personalized outreach, and manages follow-up sequences, replacing the manual grunt work of early-stage sales.",
    stack: ["React", "FastAPI", "PostgreSQL", "Node.js"],
    github: "https://github.com/AdibOmi/Outpace",
    live: null,
    image: "/images/outpace.png",
    status: "In Progress",
    highlight: true,
  },
  {
    id: "alfred",
    title: "Alfred",
    tagline: "An AI desktop assistant that keeps you on schedule",
    problem:
      "Reminders scattered across notes apps and sticky notes are easy to set and easier to forget, and digging through your own filesystem for a file you know exists shouldn't take longer than the task itself.",
    description:
      "Alfred is an Electron-based AI desktop assistant that parses natural-language reminders into a visual deadline timeline, searches your local filesystem on command, and surfaces personal progress dashboards, backed by an LLM for context-aware chat.",
    stack: ["Electron", "React", "TypeScript", "Node.js", "SQLite", "Claude API"],
    github: "https://github.com/AdibOmi/Alfred",
    live: null,
    image: "/images/alfred.png",
    status: "In Progress",
    highlight: true,
  },
  {
    id: "slouchfix",
    title: "SlouchFix",
    tagline: "A silent partner watching your six",
    problem:
      "Long coding sessions wreck posture and screen distance without anyone noticing until it's already a problem, and most fixes are either intrusive or need hardware you don't have.",
    description:
      "SlouchFix is a privacy-first desktop application that uses webcam-based facial landmarks to detect poor posture and unsafe screen distance in real time, delivering non-intrusive alerts during long coding sessions. Everything runs locally. Nothing leaves your machine.",
    stack: ["Python", "OpenCV", "MediaPipe Face Mesh", "scikit-learn", "XGBoost"],
    github: "https://github.com/AdibOmi/SlouchFix",
    live: null,
    image: "/images/slouchfix.png",
    status: "In Progress",
    highlight: true,
  },
  {
    id: "deja-view",
    title: "Deja View",
    tagline: "Never forget a good watch again",
    problem:
      "It's hard to remember what you've actually watched, whether it's worth a rewatch, or what to put on next, and recommendations rarely account for your real taste.",
    description:
      "Deja View is a movie and show tracking platform where you rate and review what you've watched, helping you decide what's worth rewatching, surface tailored recommendations for your next watch, and share picks with friends.",
    stack: ["React", "FastAPI", "SQLAlchemy", "PostgreSQL", "OMDb & TMDB APIs"],
    github: "https://github.com/AdibOmi/Deja-View",
    live: "https://getdejaview.netlify.app",
    image: "/images/dejaview.png",
    status: "Completed",
    highlight: false,
  },
];

export const skills = [
  { category: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "Dart"] },
  { category: "Frontend", items: ["React", "React Native", "Flutter", "Electron"] },
  { category: "Backend", items: ["FastAPI", "Node.js", "SQLAlchemy"] },
  { category: "Databases", items: ["PostgreSQL", "Supabase", "SQLite"] },
  { category: "Machine Learning", items: ["scikit-learn", "XGBoost"] },
  { category: "AI & Agentic Tooling", items: ["OpenAI API", "Google Gemini", "Claude API", "OpenCV", "MediaPipe"] },
  { category: "Tools", items: ["Git", "GitHub", "Figma"] },
];

export const about = {
  name: "Adib Ahmed",
  role: "Full-Stack Developer",
  university: "Islamic University of Technology (IUT)",
  degree: "B.Sc. Computer Science & Engineering",
  graduating: "2026",
  bio: [
    "I like solving problems I've actually run into, using whatever's in my toolkit to get it done, not chasing what's flashy or trendy, just what's actually needed. I'm always looking for what can be improved, and that keeps me iterating long after the first version works.",
    "I'm currently a Backend AI Engineering Intern at FlyRank, working on APIs, data pipelines, and system integrations. Before that, I built fitness-tracking features into a Flutter app at Battery Low Interactive, alongside a growing focus on computer vision and full-stack engineering.",
    "Just a laptop, a lot of coffee, and an eye on eventually building something of my own. Open to backend, frontend, or full-stack roles where I can ship real things fast.",
  ],
  email: "adibahmed@iut-dhaka.edu",
  github: "https://github.com/AdibOmi",
  linkedin: "https://linkedin.com/in/adib-ahmed", // update with real URL
};
