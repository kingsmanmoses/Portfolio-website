import React from "react";
import "./scrollup.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollBtn = () => {
  window.addEventListener("scroll", function () {
    const scrollUp = this.document.querySelector(".scrollup");
    //! when the user scroll is higher than 560 viewport show the scrollbtn or add the show scrollbtn
    if (this.scrollY >= 560) scrollUp.classList.add("show-ScrollUp");
    else scrollUp.classList.remove("show-ScrollUp");
  });
  return (
    <a href="#home" className="scrollup">
      <FaArrowUp className="scrollUp-icon" />
    </a>
  );
};

export default ScrollBtn;
