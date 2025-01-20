import React from "react";
import { LuBadgeCheck } from "react-icons/lu";
import "./style/frontendandbackend.css";

const BackendData1 = [
  {
    skillTitle: "Node JS",
  },
  {
    skillTitle: "Express JS",
  },
  {
    skillTitle: "Typescript",
  },
  {
    skillTitle: "Git",
  },
  {
    skillTitle: "ReactNative",
  },
];

const BackendData2 = [
  {
    skillTitle: "PHP",
  },
  {
    skillTitle: "MYSQL",
  },
  {
    skillTitle: "MongoDB",
  },
  {
    skillTitle: "AWS",
  },
  {
    skillTitle: "CMS",
  },
];

const Backend = () => {
  return (
    <div className="skill_content">
      <h3 className="skill_title">Backend Developer</h3>
      <div className="skill_box">
        <div className="skill_group">
          {BackendData1.map((back, backIndex) => {
            return (
              <div key={backIndex} className="skill_data">
                <LuBadgeCheck className="skill_icon" />
                <div>
                  <h3 className="skill_name">{back.skillTitle}</h3>
                </div>
              </div>
            );
          })}
        </div>
        <div className="skill_group">
          {BackendData2.map((back, backIndex) => {
            return (
              <div key={backIndex} className="skill_data">
                <LuBadgeCheck className="skill_icon" />
                <div>
                  <h3 className="skill_name">{back.skillTitle}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Backend;
