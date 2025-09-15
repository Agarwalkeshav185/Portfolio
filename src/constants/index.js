import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.jpg";
import BBIS_LOGO from '../assets/BBIS_LOGO.svg';
import IIITU from '../assets/IIITU.jpg';
import INFINITO from "../assets/infinitocomic_logo.jpg";
import Last_Minutes_deals from '../assets/Last_Minutes_deals.svg';
import JOB_PORTAL from '../assets/Job_Portal.svg';
import Airpass from '../assets/Airpass.svg';

export const HERO_CONTENT = `I am a dedicated Computer Science student with a strong foundation in Competitive Programming, Data Structures, Web Development, and Machine Learning. Driven by a passion for solving complex challenges, I aim to create innovative models that address real-world problems and provide impactful solutions.`;

export const ABOUT_TEXT = `
I am a dedicated and versatile B.Tech CSE student at IIIT Una, specializing in Competitive Programming, Data Structures and Algorithms (DSA), Web Development, and Machine Learning (ML). My journey in tech began with a strong curiosity about solving complex challenges, which has evolved into a pursuit of creating innovative and impactful applications. 

With experience in C and C++, I’ve honed my skills through rigorous problem-solving and project work. Now, I’m expanding into Web Development and Machine Learning, blending these disciplines to build real-world solutions. I am always eager to learn new technologies and adapt to emerging trends, thriving in both individual and collaborative environments. 

When I’m not coding, I enjoy exploring advancements in ML and Web Development and connecting with others who share a passion for technology. Thank you for visiting my portfolio-let's build something remarkable together!`;

export const EXPERIENCES = [
  {
      year: "July 2025 - October 2025",
      role: "Full Stack Developer Intern",
      company: "InfinitoComics",
      description: `Developed and maintained web applications using React.js, Node.js, and MongoDB. Built REST APIs, integrated DB, and collaborated with stakeholders to define project scope.`,
      technologies: ["JavaScript", "React.js", "Node.js", "MongoDB", "Express.js"],
      img: INFINITO,
      location: "Remote",
    },
  {
    year: "April 2025 - July 2025",
    role: "Full Stack Developer Intern",
    company: "Twwios Technologies Pvt Ltd.",
    location: "Remote",
    img: Last_Minutes_deals, // Replace with actual logo if available
    description: `Contributed with a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["HTML5", "CSS", "Javascript", "React.js", "Node.js", "MongoDB", "Express.js", ],
  }
];

export const EDUCATION = [
  {
    title: "B.Tech in Computer Science and Engineering",
    institution: "IIIT Una",
    location: "Una, Himachal Pradesh",
    image: IIITU,
    timePeriod: "2022-Present",
    percent: "9.02 CGPA",
    achievements: ["AAVESH (Electronic Society) Core Advisor", "FORCE (Technical Society) Executive"],
    // description: "Pursuing core courses in Data Structures, Algorithms, and Machine Learning. Active in coding competitions.",
  },
  {
    title: "Senior Secondary Education - XII",
    institution: "Blue Birds International School",
    board: "CBSE",
    location: "Mandi Dhanura, Uttar Pradesh",
    image: BBIS_LOGO,
    timePeriod: "2020-2021",
    percent: "98.8%",
    achievements: ["Science Stream District Topper"],
    // description: "Focused on Physics, Chemistry, and Mathematics. Participated in Olympiads and science fairs.",
  },
  {
    title: "Secondary Education - X",
    institution: "Blue Birds International School",
    board: "CBSE",
    location: "Mandi Dhanura, Uttar Pradesh",
    image: BBIS_LOGO,
    timePeriod: "2018-2019",
    percent: "95.4%",
    achievements: ["Top 1% of class", "Ranked 5th School Topper"],
  }
];

export const PROJECTS = [
  {
    title: "AirPass---Airline Backend System",
    image: Airpass,  // Replace with your image variable if available
    description: "Developed a scalable airline backend using Node.js microservices, Express, and MySQL with Sequelize ORM. Integrated RabbitMQ for async communication, reducing latency by 40% and handling 1000+ requests/hour.",
    technologies: ["Node.js", "Express.js", "MySQL", "Postman", "Sequelize"]
  },
  {
    title: "JobGenius",
    image: JOB_PORTAL,  // Replace with your image variable if available
    description: "Built a full-stack job portal enabling recruiters to post jobs and applicants to apply seamlessly. Added secure authentication, resume uploads with parsing, and optimized queries to enhance recruiter efficiency.",
    technologies: ["HTML5", "Tailwind CSS", "JavaScript", "React.js", "Node.js", "MongoDB" , "Express.js", "Mongoose"]
  },
  {
    title: "Image Classifier",
    image: project1,  // Replace with your image variable if available
    description: "A CNN-based image classification model achieving 85% accuracy in distinguishing animal species. ",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Pandas", "Matplotlib"]
  },
  {
    "title": "HeartGuard",
    "image": project2,  // Replace with your image variable if available
    "description": "A heart disease prediction model using K-Nearest Neighbors (KNN) with 78% accuracy, supporting early detection and timely interventions.",
    "technologies": ["Python", "K-Nearest Neighbors", "Data Preprocessing", "Feature Selection"]
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Run Code Run -- Coding Event",
    description: "Organized Run Code Run (Inter-College Event) in the Meraki, TechFest of IIIT Una, attracting participation from 50+ students, and fostering interest in data structures and team collaboration",
    year: "2025",
    icon : 'IIITU'
  },
  {
    title: "1000+ DSA Problems",
    description: "Solved over 1000+ data structures and algorithms problems on competitive coding platforms such as LeetCode, CodeChef, CodeForces and GeeksforGeeks.",
    year: "2025",
    icon: "SiLeetcode", // just the string
  },
  {
    title: "CodeChef (2-Star), Leetcode (1600+)",
    description: "Achieved a 2★ (1460) rating on CodeChef, showcasing strong problem-solving skills. Maintained a 1600+ rating on LeetCode with consistent performance in coding challenges.",
    year: "2025",
    icon: 'SiCodechef',
    highlight: false,
  },
  {
    title: "Meraki 2k23",
    description: "Secured a top 5 position in Prog-o-thon Hackathon at Meraki 2023. Achieved 1st place in the Scavenger Hunt, demonstrating teamwork and problem-solving skills.",
    year: "2023",
    icon: 'Meraki',
    highlight: true,
  },
  {
    title: "Top 20 in CODE-RUSH",
    description: "Achieved 20th rank out of thousands of participants in the coding contest CODE-RUSH, hosted by AlgoUniversity.",
    year: "2024",
    icon: 'AlgoUniversityIcon',
    highlight: false,
  },
  {
    title: "AAVESH Core Advisor",
    description: "Spearheaded AAVESH (Electronics Society) initiatives, conducting 6 technical workshops & 4 events, fostered innovation & knowledge-sharing among 50+ peers regularly, encouraging collaborative project contributions.",
    year: "2025",
    icon: 'AAVESH',
    highlight: true,
  }
];

export const CONTACT = {
  address: "Moh.Shauwan, Chandpur, Bijnor, U.P. ",
  phoneNo: "+91 7017540010 ",
  email: "agarwalkeshav185@gmail.com",
};
