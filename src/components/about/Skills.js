import React from 'react';
import './skill.css';
import { backend, frontend } from './SkillData';

const Skills = () => {
  return (
    <div className="skill-wrap d-flex gap-5">
      <div className="front-skill w-50">
        {frontend.map((item, index) => (
          <div key={index} className="skill-data mb-3">
            <div className="skill-title d-flex align-items-center justify-content-between">
              <h6>{item.title}</h6>
              <span>{item.percentage}</span>
            </div>
            <div className="skill-bar">
              <span
                className="bar-perct"
                style={{ width: `${item.percentage}` }}
              ></span>
            </div>
          </div>
        ))}
      </div>
      <div className="back-skill w-50">
        {backend.map((item, index) => (
          <div key={index} className="skill-data mb-3">
            <div className="skill-title d-flex align-items-center justify-content-between">
              <h6>{item.title}</h6>
              <span>{item.percentage}</span>
            </div>
            <div className="skill-bar">
              <span
                className="bar-perct"
                style={{ width: `${item.percentage}` }}
              ></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
