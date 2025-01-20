import React from "react";
import "./scrolldown.css";
import scrollSVG from "../../../assets/img/scroll.svg";
import { FaAngleDown } from "react-icons/fa";

const ScrollDown = () => {
  return (
    <div className="scroll_cont">
      <div className="scroll_btn button--flex">
        <img
          className="scroll_mouse wheel"
          src={scrollSVG}
          width={32}
          height={32}
          alt="scroll btn"
        />
        <span className="scrollBtn_name">Scroll Down</span>
        <FaAngleDown className="scroll_down" />
      </div>
    </div>
  );
};

export default ScrollDown;
