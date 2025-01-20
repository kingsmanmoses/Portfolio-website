import React from "react";
import { LuBadgeCheck } from "react-icons/lu";
import "./style/frontendandbackend.css";

const FrontendData1 = [
  {
    skillTitle: "HTML",
  },
  {
    skillTitle: "JavaScript",
  },
  {
    skillTitle: "CSS",
  },
  {
    skillTitle: "REACT",
  },
];
const FrontendData2 = [
  {
    skillTitle: "NEXT",
  },
  {
    skillTitle: "VUE",
  },
  {
    skillTitle: "GATSBY",
  },
  {
    skillTitle: "Tailwind ",
  },
];

const Frontend = () => {
  return (
    <div className="skill_content">
      <h3 className="skill_title">Frontend Developer</h3>
      <div className="skill_box">
        <div className="skill_group">
          {FrontendData1.map((front, frontIndex) => {
            return (
              <div key={frontIndex} className="skill_data">
                <LuBadgeCheck className="skill_icon" />
                <div>
                  <h3 className="skill_name">{front.skillTitle}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="skill_group">
          {FrontendData2.map((front, frontIndex) => {
            return (
              <div key={frontIndex} className="skill_data">
                <LuBadgeCheck className="skill_icon" />
                <div>
                  <h3 className="skill_name">{front.skillTitle}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Frontend;
