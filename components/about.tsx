"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am currently pursuing a B.Tech in Computer Science and Engineering at the National Institute of Technology Andhra Pradesh, where I began my studies in 2021 and am set to graduate in 2025. My academic foundation includes a stellar 98% in my intermediate education from Sri Chaitanya Junior College in 2021. I gained practical experience through a research internship at KCIS Lab, IIIT Hyderabad, from June to September 2023, where I developed a high-performing Support Vector Machine (SVM) classifier for stuttering detection and classification. This role allowed me to gain expertise in handling speech data and converting it into spectrograms for machine learning applications. Additionally, my projects reflect a diverse skill set; I developed a multiplayer chess game, ChessSup, using React.js, Redux, JavaScript, and various back-end technologies. In another project, CheckMeIn, I created an Android application with Kotlin for facial recognition-based attendance, achieving a 97% recognition accuracy and streamlining attendance management.

My technical skills include proficiency in Java, with familiarity in Python, C, C++, JavaScript, and SQL, and I have covered coursework in Operating Systems, Web Development, Data Structures and Algorithms, Artificial Intelligence, Natural Language Processing, and Object-Oriented Programming. I am also skilled in technologies and frameworks such as ReactJS, NodeJS, ExpressJS, MongoDB, MySQL, Linux, and GitHub. My achievements include ranking in the top 1% nationwide in the JEE Mains examination in 2021 and placing 16,000 in JEE Advanced and 942 in the TS EAMCET examination. Beyond academics, I have actively participated in extra-curricular activities, serving as an Executive Member of the Graphic Cafe at NIT AP from September 2023 to July 2024, and as an Executive Member of the CSE Association at NIT AP from August 2022 to September 2023.</p>


      <p>
        <span className="font-medium">As a fresher, I am looking for an opportunities to use my skills and apply them in developing a useful product.</span>
      </p>
    </motion.section>
  );
}
