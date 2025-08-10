import React from "react";
import "./index.scss";

export const ContactTile = ({ data }) => {
  return <React.Fragment>
    <h3>Get In Touch</h3>
    <div className="contact__decoration">
      <div className="decoration-circle decoration-circle--1"></div>
      <div className="decoration-circle decoration-circle--2"></div>
    </div>
    {data.map((item, index) => (
      <div className="contact__information glass-contact-card" key={index}>
        <i className={`uil ${item.icon} contact__icon`}></i>
        <div>
          <h3 className="contact__title">{item.text}</h3>
          <a className="contact__subtitle" href={item.href}>
            {item.value}
          </a>
        </div>
      </div>
    ))};
  </React.Fragment>
};

export default ContactTile;
