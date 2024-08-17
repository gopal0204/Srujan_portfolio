import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import securedominationImg from "@/public/download.png";

import classroomImg from "@/public/1-s2.0-S0925231222012772-gr3.jpg";
import chessImg from "@/public/chesssup.png";


export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Executive Member",
    location: "CSEA NIT Andhra Pradesh",
    description:
      "I am working as a executive member in CSEA NIT Andhra Pradesh. I am responsible for conducting workshops, hackathons, and other events. I am also responsible for managing the club's social media accounts and website.",
    icon: React.createElement(CgWorkAlt),
    date: "AUG 2022 - AUG 2024",
  },
  {
    title: "Research Intern",
    location: "IIIT Hyderabad",
    description:
      "During this internship I worked on stutering detection and classification using machine learning and deep learning techniques.",
    icon: React.createElement(CgWorkAlt),
    date: "JUN 2023 - SEP 2023",
  },
  {
    title: "Executive Member",
    location: "Graphic Cafe NIT Andhra Pradesh",
    description:
      "I am responsible for managing and handiling the social media accounts and increasing the connections to the club.",
      icon: React.createElement(CgWorkAlt),
    date: "SEP 2023 - present",
  },
  {
    title: "Research Intern",
    location: "NIT Warangal",
    description:
      "During this internship I worked on quasii total roman domination in graphs.",
    icon: React.createElement(CgWorkAlt),
    date: "MAR 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Stuttering Detection and Classification",
    description:"I analyzed speech data from three stuttering datasets and converted it into spectrograms using MFCCs. I developed an SVM classifier that achieved 85% accuracy in events.",
    tags: ["Speech proccessing", "Python", "ML"],
    imageUrl: classroomImg,
  },
  {
    title: "Chesssup",
    description:
      "Developed a web app for playing chess online with friends. It has features like real-time chat, game history, and game analysis.",
    tags: ["React", "Redux", "JavaScript", "MongoDB", "Node.js", "Socket.io", "Express"],
    imageUrl: chessImg,
  },
  {
    title: "Checkmein",
    description:
    "I built an Android app with Kotlin for facial recognition attendance, achieving 97% accuracy with the Mobile FaceNet model. The app reduced faculty workload by 45 minutes daily using Kotlin Coroutines for better performance.",
    tags: ["Kotlin", "Python", "Flask", "Firebase"],
    imageUrl: securedominationImg,
  },
] as const;

export const skillsData = [
  "DSA",
  "Applied Machine Learning",
  "NLP",
  "Deep Learning",
  "Artificial Intelligence",
  "Operating Systems",
  "Computer Networks",
  "Software Engineering",
  "Java",
  "Python",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "GitHub",
  "Express",
  "MongoDB",
  "Redux",
  "MySQL",
  "C",
  "C++",
  "Linux",
] as const;
