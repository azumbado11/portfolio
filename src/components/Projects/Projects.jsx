import React, { useContext } from "react";
import Project from "./Project";
import "./Projects.css";

import { useProjectsData } from "./projectsData";

import { Context } from "../../context/LangContext/LangContext";

const Projects = () => {
  const { mainTxt } = useContext(Context);
  const projectsData = useProjectsData();
  return (
    <section className="projects__container section__padding">
      <div id="projects" className="section-title__wrapper">
        <h2 className="title">{mainTxt.sections.projects.title}</h2>
      </div>
      <div className="projects__wrapper">
        {projectsData.map((project) => {
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
