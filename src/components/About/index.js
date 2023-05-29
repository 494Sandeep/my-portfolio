import React from "react";
import "./index.scss";

const About = ({ data }) => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img
          src={require("../../assets/img/about_img.jpg")}
          alt="Sandeep_about"
          className="about__img"
        />
        <div className="about__data">
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
          <div className="about__buttons">
            <a
              download=""
              href="pdf/Sandeep_Singh-Resume1.pdf"
              className="button button--flex"
            >
              Download CV <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
