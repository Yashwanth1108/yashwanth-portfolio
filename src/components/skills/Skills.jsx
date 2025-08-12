import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiGithub,
} from "react-icons/si";
import "./skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "React.js", icon: <FaReact color="#61DAFB" /> },
    // { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
    { name: "Redux Toolkit", icon: <SiRedux color="#764ABC" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },
    { name: "Express.js", icon: <SiExpress color="#000000" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "Git", icon: <FaGitAlt color="#F05032" /> },
    { name: "GitHub", icon: <SiGithub color="#181717" /> },
  ];

  return (
    <section className="skills" id="skills">
      <br />
      <br />
      <br />
      <h2 className="skills__title">Tech Stack</h2>
      <div className="skills__container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <span className="skill__icon">{skill.icon}</span>
            <p className="skill__name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
