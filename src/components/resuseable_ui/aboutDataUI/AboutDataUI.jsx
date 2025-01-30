import React from "react";
import "./aboutdata.css";
import { FaAward } from "react-icons/fa6";
import { BsBriefcaseFill } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const AboutDataUI = () => {
  return (
    <div className="about_info gridCont">
      <div className="about_box">
        <FaAward className="about_icon" />
        <h3 className="about_title">Experience</h3>
        <span className="about_subtitle">4 Years +</span>
      </div>
      <div className="about_box">
        <BsBriefcaseFill className="about_icon" />
        <h3 className="about_title">Completed</h3>
        <span className="about_subtitle">32+ Projects</span>
      </div>
      <div className="about_box">
        <BiSupport className="about_icon" />
        <h3 className="about_title">Support</h3>
        <span className="about_subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default AboutDataUI;
