import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./index.scss";

const Qualification = ({ data }) => {
  const [qualificationType, setQualificationType] = useState("WORK");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      { threshold: 0.3, rootMargin: '0px 0px -50px 0px' }
    );

    // Observe all qualification__data elements
    const qualificationItems = document.querySelectorAll('.qualification__data');
    qualificationItems.forEach((item) => {
      observer.observe(item);
    });

    return () => {
      qualificationItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, [qualificationType]);

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container grid">
        <div className="qualification__tabs">
          <div
            className={classnames("qualification__button button--flex timeline-bounce-in", {
              qualification__active: qualificationType === "WORK",
            })}
            onClick={() => setQualificationType("WORK")}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
          <div
            className={classnames("qualification__button button--flex timeline-bounce-in", {
              qualification__active: qualificationType === "EDUCATION",
            })}
            onClick={() => setQualificationType("EDUCATION")}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        <div className="qualification__section">
          {qualificationType === "WORK" && (
            <div className="qualification__content" id="work">
              {data?.workHistory.map((item, index) => (
                <div className="qualification__data" key={index}>
                  {index % 2 !== 0 && (
                    <>
                      <div></div>
                      <div>
                        <span className="qualification__rounder timeline-pulse-dot timeline-bounce-in"></span>
                        <span className="qualification__line timeline-draw-line"></span>
                      </div>
                    </>
                  )}
                  <div className={index % 2 === 0 ? "timeline-slide-left" : "timeline-slide-right"}>
                    <h3 className="qualification__title">{item.role}</h3>
                    <span className="qualification__subtitle">
                      {item.companyName}
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt"></i>
                      {item.duration}
                    </div>
                  </div>
                  {index % 2 === 0 && (
                    <div>
                      <span className="qualification__rounder timeline-pulse-dot timeline-bounce-in"></span>
                      {index !== data?.workHistory.length - 1 && (
                        <span className="qualification__line timeline-draw-line"></span>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          {qualificationType === "EDUCATION" && (
            <div className="qualification__content" id="work">
              {data?.education.map((item, index) => (
                <div className="qualification__data" key={index}>
                  {index % 2 !== 0 && (
                    <>
                      <div></div>
                      <div>
                        <span className="qualification__rounder timeline-pulse-dot timeline-bounce-in"></span>
                        {index !== data?.education.length - 1 && (
                          <span className="qualification__line timeline-draw-line"></span>
                        )}
                      </div>
                    </>
                  )}
                  <div className={index % 2 === 0 ? "timeline-slide-left" : "timeline-slide-right"}>
                    <h3 className="qualification__title">{item.degree}</h3>
                    <span className="qualification__subtitle">
                      {item.collage}
                    </span>
                    <div className="qualification__calender">
                      <i className="uil uil-calendar-alt"></i>
                      {item.duration}
                    </div>
                  </div>
                  {index % 2 === 0 && (
                    <div>
                      <span className="qualification__rounder timeline-pulse-dot timeline-bounce-in"></span>
                      <span className="qualification__line timeline-draw-line"></span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
