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
        </div>
        <div className="nav__toggle" id="nav-toggle">
          <i className="uil uil-apps" onClick={onCloseHandler}></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
