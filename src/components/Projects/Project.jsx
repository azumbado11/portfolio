import React from "react";
import { CodeIcon, DeployIcon } from "../../constants";
import { Badge, CustomButton } from "../index";

const Project = ({ project }) => {
  let imagesDisplay = "";
  switch (project.images.length) {
    case 1:
      imagesDisplay = "project_1_img_wrapper";
      break;
    case 3:
      imagesDisplay = "project_3_img_wrapper";
      break;
    case 4:
      imagesDisplay = "project_4_img_wrapper";
      break;
    default:
      imagesDisplay = "project_default_img_wrapper";
  }

  return (
    <article className="project__container">
      <div className="project-column__wrapper project-info">
        <h3 className="subtitle">{project.title}</h3>
        <div className="project-left-deco"></div>
        <div className="tech-badge__container">
          {project.badges.map((badge, index) => (
            <Badge key={index} Icon={badge.Icon} title={badge.title} />
          ))}
        </div>
        {project.description.map((desc, index) => (
          <p key={index}>{desc}</p>
        ))}
        <div className="projects-links__container">
          {project.codeUrl && (
            <CustomButton Icon={CodeIcon} title="Code" url={project.codeUrl} />
          )}
          {project.live && (
            <CustomButton Icon={DeployIcon} title="Live" url={project.live} />
          )}
        </div>
      </div>
      <div className={`project-column__wrapper ${imagesDisplay}`}>
        {project.images.length === 3 ? (
          <div className="project_3_img_wrapper">
            <div className="project_3_img_s-column">
              {project.images.slice(0, 2).map((image, index) => (
                <img
                  key={index}
                  className="project-img"
                  src={image}
                  alt={`Example Project-${project.id} Image`}
                  loading="lazy"
                />
              ))}
            </div>
            {project.images.slice(2, 3).map((image, index) => (
              <img
                key={index}
                className="project-img"
                src={image}
                alt={`Example Project-${project.id} Image`}
                loading="lazy"
              />
            ))}
          </div>
        ) : (
          project.images.map((image, index) => (
            <img
              key={index}
              className="project-img"
              src={image}
              alt={`Example Project-${project.id} Image`}
              loading="lazy"
            />
          ))
        )}
      </div>
    </article>
  );
};

export default Project;
