import { title } from "framer-motion/client";

export const ABOUT_TEXT = [
  "I'm a passionate Software Engineer with 1 year of experience bringing ideas to life through code. My journey began with a deep curiosity about how things work, and it's morphed into a career fueled by crafting clean, efficient code and tackling intricate challenges.",
  "I'm committed to building user-centric applications that not only function seamlessly but also provide a delightful user experience. Whether it's building mobile apps with Flutter or web applications with frameworks like React, Angular, Next.js, I possess a diverse tech stack including Node.js, MongoDB and MySQL.",
  "Beyond the code, I'm a strong believer in collaboration. I thrive in environments where open communication fosters innovative solutions. In my downtime, I stay active and enjoy exploring new technologies, constantly pushing myself to learn and adapt.",
];

export const SKILLS = [
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
    label: "C",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    label: "C++",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    label: "C Sharp",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    label: "Java",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    label: "Python",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
    label: "Dart",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    label: "HTML",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    label: "CSS",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    label: "JavaScript",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    label: "TypeScript",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    label: "Bootstrap",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    label: "Tailwind",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg",
    label: "Angular",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    label: "React",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    label: "Express",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    label: "Node",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    label: "Next",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    label: "MongoDB",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    label: "MySQL",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
    label: "Flutter",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg",
    label: "ASP.Net",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    label: "SpringBoot",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    label: "Git",
  },
  {
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    label: "Postman",
  },
];

export const EXPERIENCES = [
  {
    year: "Dec 2023 - Present",
    role: "Software Engineer",
    company: "PaperBox Business Services Pvt Ltd.",
    description: `Worked as part of a team in developing and maintaining web and mobile applications using Flutter, JavaScript, React.js, and Node.js. Contributed to implementing RESTful APIs, integrating MongoDB databases, and adding real-time communication features using Socket.IO to enhance user engagement and experience. Also implemented secure authentication and authorization mechanisms using JSON Web Tokens (JWT).`,
    technologies: [
      "Flutter",
      "Javascript",
      "React.js",
      "Node.js",
      "MongoDB",
      "JWT",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Auto Attendance System",
    description:
      "This desktop application provides an easy and secure way of taking attendance of an authorised person. First, need to register your name and upload an image then the system recognise your face takes attendance and stores information in the database.",
    technology: ["Python, TKinter, Sqlite"],
    codeLink:
      "https://github.com/sydtanvirali/Auto-Attendance-System-by-Face-Recognition",
  },
  {
    title: "TicTacToe Android Game",
    description:
      "This is a classic Tic Tac Toe game developed using Java for Android devices. The game offers a seamless two-player experience, where users alternate turns to play on a 3x3 grid.",
    technology: ["Android, Java"],
    codeLink: "https://github.com/sydtanvirali/TicTacToe-Android-Game",
  },
  {
    title: "BookStore - MERN Stack",
    description:
      "This full-stack web application offers users a smooth experience for browsing, searching, and purchasing books. Built with MongoDB, Express.js, React.js, and Node.js, it leverages modern technologies to create a robust and efficient bookstore platform.",
    technology: ["MongoDB Atlas, Express, React, Node, Tailwind"],
    codeLink: "https://github.com/sydtanvirali/BookStore-MERN-Stack",
  },
  {
    title: "My Personal Portfolio",
    description:
      "I have developed a responsive personal portfolio website using HTML5, CSS3, Bootstrap 5, and JavaScript. This portfolio demonstrates my proficiency in front-end web development and modern design practices.",
    technology: ["HTML, CSS, JavaScript, Bootstrap"],
    codeLink: "https://github.com/sydtanvirali/My-Personal-Portfolio",
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
