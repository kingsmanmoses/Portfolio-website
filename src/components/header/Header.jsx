//! import logo image
import logo from "../../assets/img/logo.svg";
import "./head.css";
//! import for icons
import { IoApps, IoCloseSharp, IoHome } from "react-icons/io5";
import { FaTools, FaUser } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { PiPresentationChartFill } from "react-icons/pi";
import { RiContactsFill } from "react-icons/ri";
import { useState } from "react";

//! nav menu list
const Links = [
  {
    name: "Home",
    path: "#home",
    icon: <IoHome className=" nav_icon" />,
  },
  {
    name: "About",
    path: "#about",
    icon: <FaUser className=" nav_icon" />,
  },
  {
    name: "Skills",
    path: "#skills",
    icon: <FaTools className=" nav_icon" />,
  },
  {
    name: "Services",
    path: "#services",
    icon: <MdHomeRepairService className=" nav_icon" />,
  },
  {
    name: "Portfolio",
    path: "#portfolio",
    icon: <PiPresentationChartFill className=" nav_icon" />,
  },
  {
    name: "Contact",
    path: "#contact",
    icon: <RiContactsFill className=" nav_icon" />,
  },
];

const Header = () => {
  // ! To Toggle menu on mobile version
  const [Toggle, ShowMenu] = useState(false);
  //! To show the active nav or tab the user is in
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav mainCont">
        <a href="/" className="nav_logo">
          <img src={logo} alt="alt" width={120} height={120} />
        </a>
        <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
          <ul className="nav_list">
            {Links.map((link, index) => {
              return (
                <li key={index} className="nav_item">
                  <a
                    onClick={() => setActiveNav(link.path)}
                    href={link.path}
                    className={
                      activeNav === link.path
                        ? "nav_link active-link"
                        : "nav_link"
                    }
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <IoCloseSharp
            className="nav_close"
            onClick={() => ShowMenu(!Toggle)}
          />
        </div>
        <div className="nav_toggle" onClick={() => ShowMenu(!Toggle)}>
          <IoApps />
        </div>
      </nav>
    </header>
  );
};

export default Header;
