import {
  cert1,
  cert2,
  cert3,
  cert4,
  cert5,
  cert6,
  cert7,
  cert8,
  cert9,
  cryptoVault,
  food,
  gym,
  jobportal1,
  jobportal2,
  jobportal3,
  jobportal4,
  jokes,
  messenger,
  qoutes,
  studentSystem,
} from "./assets/image";

export const headerData = [
  {
    id: 1,
    name: "About",
    loc: "#about",
  },
  {
    id: 2,
    name: "Experience",
    loc: "#experience",
  },
  {
    id: 3,
    name: "Work",
    loc: "#work",
  },
  {
    id: 4,
    name: "Contact",
    loc: "#contact",
  },
];

export const workExp = [
  {
    name: "BPO GNA",
    title: "Junior Web Developer",
    date: "September 2024 - Present",
    role: [
      "Worked on full-stack web applications, handling features from requirement analysis to release and post-launch updates",
      "Translated client needs into Jira user stories and contributed to planning application architecture and workflows",
      "Built and maintained systems using Vue.js, Inertia.js, Laravel, PHP, REST APIs, and MySQL",
      "Collaborated with and supported a small development team through task coordination and code reviews",
      "Assisted in deployment and development workflows using Docker, Linux environments, and optimization practices",
    ],
    value: "default",
  },
  {
    name: "8box Solutions Inc.",
    title: "Front End Developer (OJT)",
    date: "February - May 2024",
    role: [
      "Contributed to frontend development of the “Laro App” using React.js, Tailwind CSS, and reusable UI components.",
      "Improved website performance by implementing advanced React optimization techniques",
      "Customized WordPress themes using Vanilla CSS and JavaScript, and built sections using Elementor.",
      "Delivered fully responsive designs ensuring compatibility across all device sizes",
    ],
    value: "8box",
  },
  {
    name: "Yaramay Computer Service",
    title: "Front End Developer (Part Time)",
    date: "October 2023",
    role: [
      "Spearheaded the development of the OFW Serbisyo Kooperatiba landing page using a comprehensive skill set encompassing HTML,CSS, Javascript, and Bootstrap.",
      "Orchestrated the layout design for the Mapiya Landing page, employing Figma to ensure a seamless and visually appealing user interface.",
    ],
    value: "yaramay",
  },
];

export const projectData = [
  {
    image: cryptoVault,
    title: "CryptoVault",
    description:
      "Track, analyze, and manage your cryptocurrency portfolio with real-time data and advanced insights.",
    tech: "Vue.js, Tailwind CSS, CoinGecko API",
    link: "https://crypto-web-pearl.vercel.app/",
    value: 0,
  },
  {
    image: jobportal1,
    title: "Job Portal",
    description:
      "A job portal website that allows users to search and apply for jobs. It includes admin panel for managing job listings and applications.",
    tech: "Vue.js, Inertia JS, Laravel, MySQL, Tailwind CSS",
    link: null,
    value: 1,
    images: [jobportal1, jobportal2, jobportal3, jobportal4],
  },
  {
    image: studentSystem,
    title: "Student System",
    description:
      "Simple student system consists of create, read, update and delete. Hosted at netlify.",
    tech: "React JS, JSON, Axios, Tailwind",
    link: "https://react-student-system.netlify.app/",
    value: 2,
  },
  {
    image: messenger,
    title: "Messenger Clone",
    description:
      "Clone of desktop messenger with the ability to send message on each group chats.",
    tech: "Javascript, React JS, Tailwind, MaterialUI",
    link: "https://clone-messenger.netlify.app/",
    value: 3,
  },
  {
    image: gym,
    title: "PowerLab Gym",
    description:
      "A landing page website of PowerLab consists of the services they offer and their specific prices.",
    tech: "React JS, Tailwind",
    link: "https://powerlab-gym.netlify.app/",
    value: 4,
  },
  {
    image: jokes,
    title: "CompAPI",
    description: "A compilation of jokes and facts from free API's",
    tech: "HTML, CSS, JavaScript, Fetch, JQuery, Bootstrap",
    link: "https://novice-is-me.github.io/Free-Api/",
    value: 5,
  },
  {
    image: qoutes,
    title: "Qoute Generator",
    description:
      "A static qoute generator that randomly displays qoutes from famous individual.",
    tech: "HTML, CSS, JavaScript, Bootstrap",
    link: "https://novice-is-me.github.io/Quote-Generator/",
    value: 5,
  },
  {
    image: food,
    title: "Food Recipe Blog",
    description:
      "A static landing page website displaying all featured and famous recipe across the Asia.",
    tech: "HTML, CSS, Bootstrap",
    link: "https://novice-is-me.github.io/Food-Recipe-Blog/",
    value: 6,
  },
];

export const certData = [
  {
    img: cert9,
    title: "Agile and Project Management",
  },
  {
    img: cert8,
    title: "Complete Introduction to JS",
  },
  {
    img: cert7,
    title: "Web Development Open House Workshop",
  },
  {
    img: cert6,
    title: "Web Development Workshop",
  },
  {
    img: cert5,
    title: "Introduction to Git and Github",
  },
  {
    img: cert4,
    title: "DICT: Building Static Website",
  },
  {
    img: cert3,
    title: "DICT: JS for Web Development",
  },
  {
    img: cert2,
    title: "DICT: HTML and CSS for Web Development",
  },
  {
    img: cert1,
    title: "DICT: Principle of Web Development",
  },
];
