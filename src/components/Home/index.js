import React from "react";
import "./index.scss";

const Home = ({ data }) => {
  return (
    <section className="home section" id="home">
      {/* Decorative circles */}
      <div className="home__decoration">
        <div className="decoration-circle decoration-circle--1"></div>
        <div className="decoration-circle decoration-circle--2"></div>
        <div className="decoration-circle decoration-circle--3"></div>
        <div className="decoration-circle decoration-circle--4"></div>
      </div>

      <div className="home__container container">
        <div className="home__content">
          <div className="home__data">
            <h1 className="home__title glitch">
              Hi, I'm 
              <span className="text-gradient">{data.name}</span>
            </h1>
            <h2 className="home__subtitle">{data.position}</h2>
            <p className="home__description">
              {data.description}
            </p>
            
            <div className="home__buttons">
              <a href="#qualification" className="button button--primary glass-button">
                View My Work
              </a>
              <a href="#contact" className="button button--secondary glass-button">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="home__scroll">
          <div className="home__scroll-indicator">
            <span className="home__scroll-text">Scroll Down</span>
            <div className="home__scroll-icon">
              <i className="uil uil-angle-down"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
