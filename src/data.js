export const projects = [
  {
    id: "outpace",
    title: "Outpace",
    tagline: "The world's greatest agentic SDR",
    problem:
      "Early-stage founders and small teams don't have a full sales headcount, so the manual grunt work of prospecting and outreach either doesn't happen or eats the time they should be spending building.",
    description:
      "Outpace is an agentic SDR platform that ingests a sales rep's own research guide, email template, and outreach cadence, then autonomously researches prospects, drafts personalized outreach, and manages follow-up sequences — replacing the manual grunt work of early-stage sales.",
    stack: ["React", "FastAPI", "PostgreSQL", "Node.js"],
    github: "https://github.com/AdibOmi/Outpace",
    live: null,
    image: "/images/outpace.png",
    status: "In Progress",
    highlight: true,
  },
  {
    id: "slouchfix",
    title: "SlouchFix",
    tagline: "A silent partner watching your six",
    problem:
      "Long coding sessions wreck posture and screen distance without anyone noticing until it's already a problem — and most fixes are either intrusive or need hardware you don't have.",
    description:
      "SlouchFix is a privacy-first desktop application that uses webcam-based facial landmarks to detect poor posture and unsafe screen distance in real time, delivering non-intrusive alerts during long coding sessions. Everything runs locally — nothing leaves your machine.",
    stack: ["Python", "OpenCV", "MediaPipe Face Mesh", "scikit-learn", "XGBoost"],
    github: "https://github.com/AdibOmi/SlouchFix",
    live: null,
    image: "/images/slouchfix.png",
    status: "In Progress",
    highlight: true,
  },
  {
    id: "pump-fiction",
    title: "Pump Fiction",
    tagline: "Train smart, track everything, skip nothing",
    problem:
      "Fitness progress is easy to lose track of — scattered notes, no strength history, no accountability, and no one to answer the 3am 'is this normal soreness' question.",
    description:
      "Pump Fiction is a cross-platform fitness app for logging workouts and routines, tracking strength and body progress over time, journaling training sessions, and sharing PRs on a social feed — with an AI chat coach on call for on-demand fitness Q&A.",
    stack: ["Flutter", "FastAPI", "PostgreSQL (Supabase)", "Google Gemini"],
    github: "https://github.com/AdibOmi/Pump-Fiction",
    live: null,
    image: "/images/pumpfiction.png",
    status: "In Progress",
    highlight: false,
  },
  {
    id: "deja-view",
    title: "Deja View",
    tagline: "Never forget a good watch again",
    problem:
      "It's hard to remember what you've actually watched, whether it's worth a rewatch, or what to put on next — and recommendations rarely account for your real taste.",
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
  { category: "Languages", items: ["Python", "JavaScript", "C++", "Dart"] },
  { category: "Frontend", items: ["React", "React Native", "Flutter"] },
  { category: "Backend", items: ["FastAPI", "Node.js", "SQLAlchemy"] },
  { category: "Databases", items: ["PostgreSQL", "Supabase"] },
  { category: "Machine Learning", items: ["scikit-learn", "XGBoost"] },
  { category: "AI & Agentic Tooling", items: ["OpenAI API", "Google Gemini", "OpenCV", "MediaPipe"] },
  { category: "Tools", items: ["Git", "GitHub", "Figma"] },
];

export const about = {
  name: "Adib Ahmed",
  role: "Software Engineer & Builder",
  university: "Islamic University of Technology (IUT)",
  degree: "B.Sc. Computer Science & Engineering",
  graduating: "2026",
  bio: [
    "Gotham didn't hand Bruce Wayne his skills — he built them, alone, in a cave, one obsessive iteration at a time. I build the same way: I find a problem that's actually bothering me and I don't stop until there's a working system for it.",
    "By day I'm a Backend AI Engineering Intern at FlyRank, shipping APIs, data pipelines, and system integrations. Before that, I built fitness-tracking features into a Flutter app at Battery Low Interactive. Off the clock, I'm a final-year CSE student at IUT with a growing arsenal in computer vision and full-stack engineering.",
    "No billionaire inheritance, no butler, no batcave — just a laptop, a lot of coffee, and a habit of finishing what I start. Open to backend, frontend, or full-stack roles where I can ship real things fast.",
  ],
  email: "adibahmed@iut-dhaka.edu",
  github: "https://github.com/AdibOmi",
  linkedin: "https://linkedin.com/in/adib-ahmed", // update with real URL
};
