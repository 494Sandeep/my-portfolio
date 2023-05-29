import React, { useState } from "react";
import classnames from "classnames";
import "./index.scss";

const Skills = ({ data }) => {
  const [showAccordian, setShowAccordian] = useState(0);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <div>
          {data.map((item, index) => (
            <div
              className={classnames("skills__content", {
                skills__open: showAccordian === index,
                skills__close: !showAccordian !== index,
              })}
              key={index}
            >
              <div
                className="skills__header"
                onClick={() => setShowAccordian(index)}
              >
                <i className={`uil ${item.icon} skills__icon`}></i>
                <div>
                  <h1 className="skills__title">{item.skillName}</h1>
                  <span className="skills__subtitle">{item.experience}</span>
                </div>
                <i className="uil uil-angle-down skills__arrow"></i>
              </div>
              <div className="skills__list grid">
                {item.languages.map((language, languageIndex) => (
                  <div className="skills__data" key={languageIndex}>
                    <div className="skills__titles">
                      <h3 className="skills__name">{language.name}</h3>
                      <span className="skills__number">
                        {language.percentage}%
                      </span>
                    </div>
                    <div className="skills__bar">
                      <span
                        className="skills__percentage"
                        style={{ width: `${language.percentage}%` }}
                      ></span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
