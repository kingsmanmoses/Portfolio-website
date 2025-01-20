import React from "react";
import "./skills.css";
import Frontend from "../../resuseable_ui/skillsUI/Frontend";
import Backend from "../../resuseable_ui/skillsUI/Backend";

const Skills = () => {
  return (
    <section className="skill section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skill_cont mainCont gridCont">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
