import React, { useContext } from "react";
import "./Navbar.css";
import { Context } from "../../context/LangContext/LangContext";

const Navbar = () => {
  const { mainTxt, setLanguage } = useContext(Context);
  return (
    <header className="header__container">
      <nav className="navbar__container">
        <ul className="navbar-links__container">
          {mainTxt.navlinks.map((link) => {
            return (
              <a href={link.url} key={link.title}>
                {link.title}
              </a>
            );
          })}
        </ul>
        <button
          className="navbar-lang-btn"
          onClick={() => {
            setLanguage((prev) => !prev);
          }}
        >
          {mainTxt.language}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
