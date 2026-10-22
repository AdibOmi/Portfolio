export const projects = [
  {
    id: "outpace",
    title: "Outpace",
    tagline: "An AI sales rep that researches your prospects, writes personalized outreach, and runs the follow-ups for you.",
    problem:
      "Early-stage founders and small teams don't have a full sales headcount, so the manual grunt work of prospecting and outreach either doesn't happen or eats the time they should be spending building.",
    description:
      "Outpace is an agentic SDR platform that ingests a sales rep's own research guide, email template, and outreach cadence, then autonomously researches prospects, drafts personalized outreach, and manages follow-up sequences for small teams, replacing the manual grunt work of early-stage sales.",
    stack: ["React", "Node.js", "FastAPI", "PostgreSQL"],
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
      "Alfred is an Electron desktop assistant that sits as a floating, always-on-top icon. On command, it uses a vision-enabled LLM to read your screen, understand whatever app you're in, and guide you through the task step-by-step, powered by the Claude API's vision capabilities.",
    stack: ["Electron", "React", "TypeScript", "Claude API (Vision)"],
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
      "SlouchFix watches you through your webcam while you code, tracks facial landmarks to detect slouching or unsafe screen distance in real time, and sends a non-intrusive alert before your back starts filing complaints. All detection runs on your machine: no cloud, no uploads, no footage saved.",
    stack: ["Python", "OpenCV", "MediaPipe", "scikit-learn", "XGBoost"],
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
      "RootRecord is a patient management system for dental clinics, covering records, appointments, and billing, with role-based access for clinic staff. The doctor takes a picture of a handwritten prescription and RootRecord reads it, pulls out the patient's details, and fills in the record automatically, so nobody has to retype it.",
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
    tagline: "A personal movie and TV journal that remembers what you've watched and explains what to watch next.",
    problem:
      "It's hard to remember what you've actually watched, whether it's worth a rewatch, or what to put on next, and recommendations rarely account for your real taste.",
    description:
      "Deja View is a personal movie and TV journal for rating, reviewing, and logging rewatches. Its recommendations explain why each pick suits you, a \"Surprise me\" button finds something you haven't seen, and AI-written trivia gives you something to share with friends.",
    stack: ["React", "Hono", "SQLite", "Claude API"],
    github: "https://github.com/AdibOmi/Deja-View",
    live: "https://deja-view.adibomi885.workers.dev",
    image: "/images/dejaview.svg",
    status: "Live",
    highlight: false,
  },
  {
    id: "dent-o-shine",
    title: "Dent-O-Shine",
    tagline: "A bilingual website for a multi-speciality dental clinic in Uttara, Dhaka.",
    problem:
      "The clinic had no web presence, so patients had no easy way to look up its treatments, visiting hours, or location, or to get in touch before walking in.",
    description:
      "Dent-O-Shine is the website for Dr. Ayesha Akter's dental clinic. It presents the clinic's treatments, from braces and root canals to implants and whitening, along with chamber hours, location, and one-tap WhatsApp contact for booking appointments, in both English and Bangla.",
    stack: ["React", "Vite", "Cloudflare Pages"],
    github: null,
    live: "https://dent-o-shine.com/",
    image: "/images/dentoshine.svg",
    status: "Live",
    client: true,
    highlight: false,
  },
];

export const skills = [
  { category: "Programming Languages", items: ["Python", "JavaScript", "TypeScript", "C++"] },
  { category: "Frameworks & Databases", items: ["React", "Flutter", "Electron", "FastAPI", "Node.js", "PostgreSQL", "Supabase"] },
  { category: "AI / ML", items: ["OpenAI API", "Claude API", "OpenCV", "scikit-learn"] },
  { category: "Tools", items: ["Git", "Docker"] },
];

export const about = {
  name: "Adib Ahmed",
  role: "Full-Stack Developer",
  university: "Islamic University of Technology (IUT)",
  degree: "B.Sc. Computer Science & Engineering",
  graduated: "2026",
  bio: [
    "I like solving problems I've actually run into, using whatever's in my toolkit to get it done, not chasing what's flashy or trendy, just what's actually needed. I'm always looking for what can be improved, and that keeps me iterating long after the first version works.",
    "I recently finished a Backend AI Engineering internship at FlyRank, where I worked on backend APIs and data pipelines, and presented my AI assistant Alfred as my capstone project. Before that, I built fitness-tracking features into a Flutter app at Battery Low Interactive, alongside a growing focus on computer vision and full-stack engineering.",
    "Just a laptop, a lot of coffee, and an eye on eventually building something of my own. Open to backend, frontend, or full-stack roles where I can ship real things fast.",
  ],
  email: "adibomi885@gmail.com",
  github: "https://github.com/AdibOmi",
  linkedin: "https://www.linkedin.com/in/adibahmed122",
  resume: "/Adib-Ahmed-Resume.pdf",
};
