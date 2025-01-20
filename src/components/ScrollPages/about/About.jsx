import React from "react";
import { FaDownload } from "react-icons/fa";
import "./about.css";
import CV from "../../../assets/files/Moses_CV.pdf";
import aboutImg from "../../../assets/img/about.jpg";
import AboutDataUI from "../../resuseable_ui/aboutDataUI/AboutDataUI";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">Introduction</span>
      <div className="about_cont mainCont gridCont">
        <img
          src={aboutImg}
          className="about_img"
          width={300}
          height={300}
          alt=""
        />
        <div className="about_data">
          <AboutDataUI />
          <p className="about_desc">
            I am a seasoned software developer, I blend technical expertise with
            effective communication. My journey spans diverse tech stacks, from
            web to mobile. Let’s connect and create something amazing together!
          </p>
          <a download href={CV} className="button button--flex btn-about">
            Download CV <FaDownload className="about_btnIcon ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
