import React from "react";
import "./index.scss";

const ProjectInMind = ({ data }) => {
  return (
    <section className="project section">
      <div className="project__bg">
        <div className="project__container container grid">
          <div className="project__data">
            <h2 className="project__title">{data?.title}</h2>
            <p className="project__description">{data?.description}</p>
            <a href="#contact" className="button button--flex button--white">
              Contact Me{" "}
              <i className="uil uil-message project__icon button__icon"></i>
            </a>
          </div>
          {/* <div className="project__img"></div> */}
          <img
            src={require("../../assets/img/project_at_work@2x.png")}
            alt=""
            className="project__img"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectInMind;
