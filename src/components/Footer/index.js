import React from "react";
import "./index.scss";

const Footer = ({ data }) => {
  return (
    <footer className="footer footer__bg">
      <div className="footer__container container grid">
        <div>
          <h1 className="footer__title">{data.name}</h1>
          <span className="footer__subtitle">{data.position}</span>
        </div>
        <ul className="footer__links">
          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact Me
            </a>
          </li>
        </ul>

        <div className="footer__socials">
          <a
            href="https://www.linkedin.com/in/sandeep-singh-frontend/"
            target="_blank"
            rel="noreferrer"
            className="footer__social"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/494Sandeep"
            target="_blank"
            rel="noreferrer"
            className="footer__social"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
      <p className="footer__copy">&#169; {data.copyRight}</p>
    </footer>
  );
};

export default Footer;
