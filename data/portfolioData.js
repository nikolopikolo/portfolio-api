// Portfolio data imported from https://github.com/nikolopikolo/portfolio-react

const user = {
  name: "Nikolopikolo",
  greeting: "Hey, I'm Nikolopikolo.",
  role: "Aspiring Full Stack Developer",
  location: "Tbilisi / Remote (Earth - Open to Remote)",
  status: "Available for junior roles & open-source collaborations",
  email: "developer.contact@example.com",
  github: "https://github.com/nikolopikolo",
  linkedin: "https://linkedin.com",
  bio: "Curious and dedicated aspiring software developer with a passion for building clean, user-centric software. Enthusiastic about modern web engineering, Android development, and local offline utilities.",
  skills: [
    "React",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Kotlin",
    "Python",
    "Android Development",
    "Wear OS",
    "Git",
    "GitHub",
    "Android Studio",
    "Vite",
  ],
  about: {
    paragraphs: [
      "I am an aspiring software developer with an enthusiastic interest in programming, computer systems, and modern software development. My curiosity centers on how software can solve practical everyday problems while remaining clean, robust, and accessible.",
      "I enjoy taking ideas from initial concept to functioning applications—whether that means crafting responsive interfaces with React, engineering native mobile experiences with Kotlin and Android SDK, or designing offline-first tools. I believe in continuous practice, reading documentation thoroughly, and writing code with clarity and maintainability.",
    ],
    milestones: [
      {
        period: "Early Steps",
        title: "Foundations in Code",
        description:
          "Began by studying programming logic, data structures, and scripting in Python and JavaScript.",
      },
      {
        period: "Mobile Focus",
        title: "Native Android & Kotlin",
        description:
          "Adopted Kotlin and Android SDK, building native applications with Room database and Material Design 3.",
      },
      {
        period: "Local Utilities",
        title: "PixelGallery & Fundory",
        description:
          "Engineered local Wi-Fi transfer for Android/Wear OS (PixelGallery) and offline-first budgeting (Fundory).",
      },
      {
        period: "Present Day",
        title: "Modern React & Web Architecture",
        description:
          "Expanding into React component architectures, state management patterns, and performant web applications.",
      },
    ],
    cards: [
      {
        id: "learning",
        title: "Currently Learning",
        description:
          "Deepening knowledge of Kotlin Coroutines, Jetpack Compose, and advanced React design patterns and state management.",
        tag: "Focus Area",
      },
      {
        id: "interests",
        title: "Main Interests",
        description:
          "Front-end engineering, native Android mobile applications, clean component architecture, and local network utilities.",
        tag: "Exploration",
      },
      {
        id: "working-on",
        title: "What I'm Working On",
        description:
          "Refining personal Android utilities, developing modular React interfaces, and enhancing local Wi-Fi media synchronization.",
        tag: "In Progress",
      },
    ],
  },
};

const projects = [
  {
    id: 1,
    slug: "pixelgallery",
    name: "PixelGallery",
    badge: "Android & Wear OS",
    category: "Mobile Application",
    description:
      "An Android and Wear OS application for transferring and viewing images locally over Wi-Fi. Features zero-cloud peer-to-peer synchronization, responsive gallery layouts, and companion watch display mode.",
    features: [
      "Direct local Wi-Fi transfer without external servers",
      "Companion Wear OS tile and image viewer",
      "Low-latency image compression and preview caching",
    ],
    technologies: [
      "Kotlin",
      "Android SDK",
      "Wear OS",
      "Local Wi-Fi / Sockets",
      "Jetpack",
    ],
    githubUrl: "https://github.com/nikolopikolo/PixelGallery",
    status: "Active Project",
  },
  {
    id: 2,
    slug: "fundory",
    name: "Fundory",
    badge: "Personal Finance",
    category: "Android Application",
    description:
      "A personal budgeting and shopping cost calculator Android application designed to help track planned purchases, prevent overspending at checkout, and calculate cart totals with tax and discount adjustments.",
    features: [
      "Instant cart total calculation with tax and discount adjustments",
      "Clean Material Design 3 interface with dark mode",
      "Local offline data persistence with Room database",
    ],
    technologies: [
      "Kotlin",
      "Android Studio",
      "Material Design 3",
      "Room Database",
      "Architecture Components",
    ],
    githubUrl: "https://github.com/nikolopikolo/fundory",
    status: "Completed Prototype",
  },
];

const skills = [
  {
    name: "React",
    category: "Frontend Development",
    level: "Core Framework",
    highlight: "Components & Hooks",
  },
  {
    name: "JavaScript",
    category: "Frontend Development",
    level: "ES6+",
    highlight: "Modern syntax & Async",
  },
  {
    name: "HTML5",
    category: "Frontend Development",
    level: "Semantic Markup",
    highlight: "Accessibility & SEO",
  },
  {
    name: "CSS3",
    category: "Frontend Development",
    level: "Modern CSS",
    highlight: "Flexbox, Grid & Animations",
  },
  {
    name: "Kotlin",
    category: "Programming Languages",
    level: "Intermediate",
    highlight: "Android & Coroutines",
  },
  {
    name: "Python",
    category: "Programming Languages",
    level: "Foundational",
    highlight: "Scripting & Algorithms",
  },
  {
    name: "JavaScript",
    category: "Programming Languages",
    level: "Intermediate",
    highlight: "Web & DOM Logic",
  },
  {
    name: "Android Development",
    category: "Mobile & Platforms",
    level: "Practical",
    highlight: "Android SDK & Jetpack",
  },
  {
    name: "Wear OS",
    category: "Mobile & Platforms",
    level: "Companion Apps",
    highlight: "Wearable Sync & UI",
  },
  {
    name: "Git",
    category: "Tools & Workflow",
    level: "Version Control",
    highlight: "Branching & Workflow",
  },
  {
    name: "GitHub",
    category: "Tools & Workflow",
    level: "Collaboration",
    highlight: "Repositories & PRs",
  },
  {
    name: "Android Studio",
    category: "Tools & Workflow",
    level: "IDE",
    highlight: "Profiling & Emulators",
  },
  {
    name: "Vite",
    category: "Tools & Workflow",
    level: "Build Tool",
    highlight: "Fast Bundling & HMR",
  },
];

module.exports = {
  user,
  projects,
  skills,
};
