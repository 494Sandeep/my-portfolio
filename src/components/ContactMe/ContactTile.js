import React from "react";
import "./index.scss";

export const ContactTile = ({ data }) => {
  return data.map((item, index) => (
    <div className="contact__information" key={index}>
      <i className={`uil ${item.icon} contact__icon`}></i>
      <div>
        <h3 className="contact__title">{item.text}</h3>
        <a className="contact__subtitle" href={item.href}>
          {item.value}
        </a>
      </div>
    </div>
  ));
};

export default ContactTile;
