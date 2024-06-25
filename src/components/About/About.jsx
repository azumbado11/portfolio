import React, { useContext } from "react";
import "./About.css";
import AboutImg from "../../assets/about-me.webp";
import { Context } from "../../context/LangContext/LangContext";

const About = () => {
  const { mainTxt } = useContext(Context);
  return (
    <section className="section__padding">
      <div id="about" className="about__container">
        <div className="about-left__container">
          <div className="about-left-deco-1"></div>
          <div className="about-left-deco-2"></div>
          <img
            className="about-left-img"
            src={AboutImg}
            alt="about me image"
            loading="lazy"
          />
        </div>
        <div className="about-right__container">
          <h2 className="title">{mainTxt.sections.about.title}</h2>
          <div className="about-right-deco"></div>
          <p>{mainTxt.sections.about.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default About;
