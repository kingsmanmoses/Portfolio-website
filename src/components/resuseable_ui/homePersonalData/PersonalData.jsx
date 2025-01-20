import React from "react";
import hand from "../../../assets/img/hand.svg";
import "./personal.css";

const PersonalData = () => {
  return (
    <div className="personal_data">
      <h1 className="personal_title">Okoye Moses</h1>
      <h3 className="personal_subtitle">Software Developer</h3>
      <p className="personal_desc">
        As a seasoned software developer, I blend technical expertise with
        effective communication. My journey spans diverse tech stacks, from web
        to mobile. Let’s connect and create something amazing together!
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <img
          className="ml-1 button__icon"
          src={hand}
          alt="send icon"
          width={24}
          height={24}
        />
      </a>
    </div>
  );
};

export default PersonalData;
