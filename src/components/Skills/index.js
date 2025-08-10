import React from "react";
import "./index.scss";

const Skills = ({ data }) => {
  const allSkills = data.reduce((acc, category) => {
    return acc.concat(category.languages);
  }, []);

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">My Skills</h2>
      <span className="section__subtitle">
        We transform your ideas into captivating web projects that inspire both you and your customers.
      </span>

      <div className="skills__container container">
        <div className="pulse-ring pulse-ring__1"></div>
        <div className="pulse-ring pulse-ring__2"></div>
        {/* <div className="pulse-ring pulse-ring__3"></div> */}
        <div className="skills__grid">
          {allSkills.map((skill, index) => (
            <div className="skill__card-container" key={index}>
              <div className="skills__card">
                <div className="skills__icon">
                  {skill.svgIcon
                    ? <div dangerouslySetInnerHTML={{ __html: skill.svgIcon }} />
                    : <img src={require(`../../assets/img/${skill.img}`)} alt={skill.name} />
                  }
                </div>
                <div className="skills__percentage">{skill.percentage}%</div>
                <div className="skills__name">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
