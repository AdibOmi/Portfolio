export const projects = [
  {
    id: "outpace",
    title: "Outpace",
    tagline: "An AI sales rep that researches your prospects, writes personalized outreach, and runs the follow-ups for you.",
    problem:
      "Early-stage founders and small teams don't have a full sales headcount, so the manual grunt work of prospecting and outreach either doesn't happen or eats the time they should be spending building.",
    description:
      "Outpace is an agentic SDR platform that ingests a sales rep's own research guide, email template, and outreach cadence, then autonomously researches prospects, drafts personalized outreach, and manages follow-up sequences, replacing the manual grunt work of early-stage sales.",
    stack: ["React", "FastAPI", "PostgreSQL", "Node.js"],
    github: "https://github.com/AdibOmi/Outpace",
    live: null,
    image: "/images/outpace.svg",
    status: "In Progress",
    highlight: true,
  },
  {
    id: "alfred",
    title: "Alfred",
    tagline: "An AI desktop assistant that guides you through any app, on command.",
    problem:
      "Learning unfamiliar software or hunting through nested menus for a rarely-used feature breaks your focus and burns time, and most in-app help is either static documentation or missing entirely.",
    description:
      "Alfred is an Electron-based AI desktop assistant that watches your screen, understands whatever app you're in, and walks you through any task step-by-step on command, powered by the Claude API for real-time, context-aware guidance across your entire desktop.",
    stack: ["Electron", "React", "TypeScript", "Node.js", "Claude API"],
    github: "https://github.com/AdibOmi/Alfred",
    live: null,
    image: "/images/alfred.svg",
    status: "In Progress",
    highlight: true,
  },
  {
    id: "slouchfix",
    title: "SlouchFix",
    tagline: "On-device posture detection for programmers who forget they have spines.",
    problem:
      "Long coding sessions wreck posture and screen distance without anyone noticing until it's already a problem, and most fixes are either intrusive or need hardware you don't have.",
    description:
      "SlouchFix watches you through your webcam while you code, tracks facial landmarks to tell when you're slouching or leaning too close to the screen, and nudges you before your back starts filing complaints. All detection runs on your machine: no cloud, no uploads, no footage saved.",
    stack: ["Python", "OpenCV", "MediaPipe Face Mesh", "scikit-learn", "XGBoost"],
    github: "https://github.com/AdibOmi/SlouchFix",
    live: null,
    image: "/images/slouchfix.svg",
    status: "In Progress",
    highlight: true,
  },
  {
    id: "rootrecord",
    title: "RootRecord",
    tagline: "Snap a photo of a handwritten prescription and the patient record fills itself in.",
    problem:
      "Dental clinics still run on handwritten prescriptions, so staff end up typing every patient's details into the system by hand, which is slow, repetitive, and full of typos.",
    description:
      "RootRecord is a patient management system for dental clinics, covering records, appointments, and billing. The doctor takes a picture of a handwritten prescription and RootRecord reads it, pulls out the patient's details, and fills in the record automatically, so nobody has to retype it.",
    stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/AdibOmi/RootRecord",
    live: null,
    image: "/images/rootrecord.svg",
    status: "In Progress",
    highlight: true,
  },
  {
    id: "deja-view",
    title: "Deja View",
    tagline: "Track what you've watched and get suggestions for what to watch next.",
    problem:
      "It's hard to remember what you've actually watched, whether it's worth a rewatch, or what to put on next, and recommendations rarely account for your real taste.",
    description:
      "Deja View is a movie and show tracking platform where you rate and review what you've watched. It uses your ratings to suggest what to watch next, helps you decide what's worth a rewatch, and lets you share picks with friends.",
    stack: ["React", "FastAPI", "SQLAlchemy", "PostgreSQL", "OMDb & TMDB APIs"],
    github: "https://github.com/AdibOmi/Deja-View",
    live: "https://getdejaview.netlify.app",
    image: "/images/dejaview.svg",
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
  graduated: "2026",
  bio: [
    "I like solving problems I've actually run into, using whatever's in my toolkit to get it done, not chasing what's flashy or trendy, just what's actually needed. I'm always looking for what can be improved, and that keeps me iterating long after the first version works.",
    "I'm wrapping up a Backend AI Engineering internship at FlyRank, where I've worked on APIs, data pipelines, and system integrations. Before that, I built fitness-tracking features into a Flutter app at Battery Low Interactive, alongside a growing focus on computer vision and full-stack engineering.",
    "Just a laptop, a lot of coffee, and an eye on eventually building something of my own. Open to backend, frontend, or full-stack roles where I can ship real things fast.",
  ],
  email: "adibomi885@gmail.com",
  github: "https://github.com/AdibOmi",
  linkedin: "https://linkedin.com/in/adib-ahmed", // update with real URL
};
