import React, { useContext } from "react";
import "./Projects.css";
import {
  ReactIcon,
  NextIcon,
  ExpressIcon,
  AstroIcon,
  CodeIcon,
  DeployIcon,
} from "../../constants/index";

import { Badge, CustomButton } from "../index";

import Image1 from "../../assets/ecommerce-1.webp";
import Image2 from "../../assets/ecommerce-2.webp";
import Image3 from "../../assets/ecommerce-3.webp";
import Image4 from "../../assets/ecommerce-4.webp";

import Image5 from "../../assets/landing-1.webp";
import Image6 from "../../assets/landing-2.webp";
import Image7 from "../../assets/landing-3.webp";

import { Context } from "../../context/LangContext/LangContext";

const Projects = () => {
  const { mainTxt } = useContext(Context);
  return (
    <section className="projects__container section__padding">
      <div id="projects" className="section-title__wrapper">
        <h2 className="title">{mainTxt.sections.projects.title}</h2>
      </div>
      <div className="projects__wrapper">
        <article className="project__container">
          <div className="project-column__wrapper project-info">
            <h3 className="subtitle">
              {mainTxt.sections.projects.project_1.title}
            </h3>
            <div className="project-left-deco"></div>
            <div className="tech-badge__container">
              <Badge Icon={ReactIcon} title="React" />
              <Badge Icon={NextIcon} title="Next" />
              <Badge Icon={ExpressIcon} title="Express" />
            </div>
            <p>{mainTxt.sections.projects.project_1.desc_1}</p>
            <p>{mainTxt.sections.projects.project_1.desc_2}</p>
            <div className="projects-links__container">
              <CustomButton
                Icon={CodeIcon}
                title="Code"
                url={"https://github.com/azumbado11/next-one"}
              />
              {/* <CustomButton Icon={DeployIcon} title="Demo" /> */}
            </div>
          </div>
          <div className="project-column__wrapper project-img-column__wrapper">
            <img
              className="project-img"
              src={Image1}
              alt="Example Project-1 Image"
              loading="lazy"
            />
            <img
              className="project-img"
              src={Image2}
              alt="Example Project-1 Image"
              loading="lazy"
            />
          </div>
          <div className="project-column__wrapper project-img-column__wrapper">
            <img
              className="project-img"
              src={Image3}
              alt="Example Project-1 Image"
              loading="lazy"
            />
            <img
              className="project-img"
              src={Image4}
              alt="Example Project-1 Image"
              loading="lazy"
            />
          </div>
        </article>
        {/* Project 2 */}
        <article className="project__container">
          <div className="project-column__wrapper project-info">
            <h3 className="subtitle">
              {mainTxt.sections.projects.project_2.title}
            </h3>
            <div className="project-left-deco"></div>
            <div className="tech-badge__container">
              <Badge Icon={AstroIcon} title="Astro" />
            </div>
            <p>{mainTxt.sections.projects.project_2.desc_1}</p>
            <div className="projects-links__container">
              {/* <CustomButton Icon={CodeIcon} title="Code" /> */}
              {/* <CustomButton Icon={DeployIcon} title="Demo" /> */}
            </div>
          </div>
          <div className="project-column__wrapper project-img-column__wrapper">
            <img
              className="project-img"
              src={Image5}
              alt="Example Project-2 Image"
              loading="lazy"
            />
            <img
              className="project-img"
              src={Image6}
              alt="Example Project-2 Image"
              loading="lazy"
            />
          </div>
          <div className="project-column__wrapper project-img-column__wrapper">
            <img
              className="project-img-l"
              src={Image7}
              alt="Example Project-2 Image"
              loading="lazy"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
