import React, { useState } from "react";
import classNames from "classnames";

import "./index.scss";

const Header = () => {
  const [showNavMenu, setShowNavMenu] = useState(false);

  const onCloseHandler = () => {
    setShowNavMenu(!showNavMenu);
  };

  const onNavItemClickHanlder = () => {
    setShowNavMenu(false);
  };

  const themeHanlder = ({ target }) => {
    const { className } = target;

    const themeButton = document.getElementById("theme-button");
    const darkTheme = "dark-theme";

    if (className.includes("uil-moon")) {
      document.body.classList.add(darkTheme);
      themeButton.classList.add("uil-sun");
      themeButton.classList.remove("uil-moon");
    } else {
      document.body.classList.remove(darkTheme);
      themeButton.classList.add("uil-moon");
      themeButton.classList.remove("uil-sun");
    }
  };

  return (
    <header className="header" id="header">
      <nav className="nav conatiner">
        <a href="#home" className="nav__logo">
          Sandeep
        </a>

        <div
          className={classNames("nav__menu", { "show-menu": showNavMenu })}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link"
                onClick={onNavItemClickHanlder}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className="nav__link"
                onClick={onNavItemClickHanlder}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>{" "}
            <li className="nav__item">
              <a
                href="#skills"
                className="nav__link"
                onClick={onNavItemClickHanlder}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>{" "}
            <li className="nav__item">
              <a
                href="#qualification"
                className="nav__link"
                onClick={onNavItemClickHanlder}
              >
                <i className="uil uil-scenery nav__icon"></i> My Journey
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className="nav__link"
                onClick={onNavItemClickHanlder}
              >
                <i className="uil uil-message nav__icon"></i> Contact me
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={onCloseHandler}
          ></i>
        </div>
        <div className="nav__btns">
          <i
            className="uil uil-moon change-theme"
            id="theme-button"
            onClick={themeHanlder}
          ></i>
          <div className="nav__toggle" id="nav-toggle">
            <i className="uil uil-apps" onClick={onCloseHandler}></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
