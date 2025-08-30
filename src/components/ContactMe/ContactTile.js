import React from "react";
import "./index.scss";

export const ContactTile = ({ data }) => {
  return <div className="contact__info">
    <div className="pulse-ring decoration-circle__1"></div>
    <div className="pulse-ring decoration-circle__2"></div>
    {data.map((item, index) => (
      <div className="contact__information glass-contact-card fadeUp" key={index}>
        <i className={`uil ${item.icon} contact__icon`}></i>
        <div>
          <h3 className="contact__title">{item.text}</h3>
          <a className="contact__subtitle" href={item.href}>
            {item.value}
          </a>
        </div>
      </div>
    ))}
  </div>
};

export default ContactTile;
