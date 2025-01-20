import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./social.css";

const SocialMedia = () => {
  return (
    <div className="home_social">
      <a
        href="https://www.instagram.com/kingsmanmoses/"
        className="homeSoc_icon"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram />
      </a>
      <a
        href="https://github.com/kingsmanmoses"
        className="homeSoc_icon"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>
      <a
        href="https://x.com/Iceagemoses"
        className="homeSoc_icon"
        target="_blank"
        rel="noreferrer"
      >
        <FaXTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/okoye-moses-976a5b1b5/"
        className="homeSoc_icon"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default SocialMedia;
