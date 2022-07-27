import React, { useState } from 'react';
import './head.css';
import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { navlinks } from './Data';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  // To close menu bar or open it in mobile
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  // To change background navbar color
  const [header, setHeader] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  // For the user to scroll back to top
  const toggleHome = () => {
    scroll.animateTopScroll();
  };
  return (
    <>
      <header className={header ? 'header active' : 'header'}>
        <div className="container">
          <div className="nav d-flex align-items-center justify-content-between">
            {/* For the logo */}
            <Link to="/" className="logo" onClick={toggleHome}>
              <h5>MOSES</h5>
            </Link>
            {/* For the nav list */}
            <div
              className={click ? 'nav-menu active' : 'nav-menu'}
              onClick={closeMenu}
            >
              <ul className="nav-list">
                {navlinks.map((item, index) => (
                  <li key={index} className="nav-item">
                    <LinkS
                      onClick={closeMenu}
                      smooth={true}
                      duration={100}
                      spy={true}
                      exact="true"
                      offset={-80}
                      className="a"
                      to={item.url}
                    >
                      {item.title}
                    </LinkS>
                  </li>
                ))}
              </ul>
            </div>
            <span className="mobile-menu" onClick={handleClick}>
              {click ? <AiOutlineClose /> : <AiOutlineBars />}
            </span>
            {/* For the button right nav */}
            {/* <div className="nav-right d-flex align-items-center gap-4">
              <button className="btn">
                <NavLink className="a" to="tel:08131058146">
                  Let's Talk
                </NavLink>
              </button>
            </div> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
