import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import { projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProject = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProject);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };
  return (
    <>
      <div className="work__filters">
        {projectsNav.map((li, index) => (
          <span
            onClick={(e) => {
              handleClick(e, index);
            }}
            className={`${active === index ? "active-work" : ""} work__items`}
            key={index}
          >
            {li.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => (
          <WorkItems item={item} key={item.id} />
        ))}
      </div>
    </>
  );
};

export default Projects;
