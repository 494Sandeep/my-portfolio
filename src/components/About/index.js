import React, { useEffect } from "react";
import "./index.scss";

const About = ({ data }) => {
  useEffect(() => {
    // Minimal parallax scrolling effect (fixed overlap issues)
    const scrollEvent = window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;

      // Only apply very subtle parallax to hero section elements
      const pulseRings = document.querySelectorAll('.pulse-ring');
      pulseRings.forEach((ring, index) => {
        const speed = 0.1 + (index * 0.02); // Much slower speeds
        ring.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
    return () => {
      window.removeEventListener('scroll', scrollEvent);
    }
  }, []);

  return (
    <section className="about section" id="about">
      <header>
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>
      </header>
      <div className="about__container container grid">
        <div className="about__blob effects-container">
          <div className="my-blob morphing-blob">
            <img src={require("../../assets/img/sandeep_photo-removebg-preview.png")} alt="Sandeep_about" className="about__img" />
            {/* <!-- Floating elements inside blob --> */}
            <div className="dot-ping"></div>
            <div className="dot-bounce"></div>
            <div className="dot-pulse"></div>
          </div>

          {/* <!-- Orbiting elements --> */}
          <div className="orbit-container">
            <div className="dot-purple"></div>
            <div className="dot-blue"></div>
          </div>
        </div>
        <div className="about__data">
          <div className="pulse-ring pulse-ring__1"></div>
          <p className="about__description">{data.aboutMe}</p>
          <div className="about__info">
            {data.aboutMeDetails.map((item, index) => {
              return (
                <div key={index}>
                  <span className="about__info-title">{item.title}</span>
                  <span
                    className="about_info-name"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  ></span>
                </div>
              );
            })}
          </div>
          <div className="badges">
            <span className="badge purple">Problem Solver</span>
            <span className="badge blue">Team Player</span>
            <span className="badge green">Continuous Learner</span>
          </div>
          <div className="about__buttons glass-button button button--flex">
            <a download="" href="pdf/Sandeep_Singh-Resume1.pdf">
              Download CV <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
