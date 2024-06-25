import React from "react";
import "./Footer.css";
import { MailIcon, GithubIcon, LinkedInIcon } from "../../constants/index";

const Footer = () => {
  return (
    <footer className="footer__container section__padding">
      <div className="footer-socials__container">
        <a
          href="mailto:gv11zumbado@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Mail Link"
        >
          <button className="social-btn" aria-label="Go to Mail Button">
            <MailIcon />
          </button>
        </a>
        <a
          href="https://github.com/azumbado11"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to Github  Link"
        >
          <button className="social-btn" aria-label="Go to Github  Button">
            <GithubIcon />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/azumbado11"
          target="_blank"
          rel="noreferrer"
          aria-label="Go to LinkedIn  Link"
        >
          <button className="social-btn" aria-label="Go to LinkedIn  Button">
            <LinkedInIcon />
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
