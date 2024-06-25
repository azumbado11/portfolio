import React, { useContext } from "react";
import { Navbar } from "../index";
import "./Hero.css";
import { Context } from "../../context/LangContext/LangContext";

const Hero = () => {
  const { mainTxt } = useContext(Context);
  return (
    <section className="hero__container section__padding">
      <Navbar />
      <article className="hero-header__container">
        <div className="hero-left__container">
          <h1>Alonso Zumbado</h1>
          <span>{mainTxt.hero.title}</span>
          <div className="hero-left-deco"></div>
        </div>
        <div className="hero-right__container">
          <p>{mainTxt.hero.desc}</p>
        </div>
      </article>
    </section>
  );
};

export default Hero;
