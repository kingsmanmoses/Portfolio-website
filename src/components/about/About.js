import React, { useState } from 'react';
import './about.css';
import { Container, Row, Col } from 'reactstrap';
import aboutimg from '../../img/me2.png';
import { FaInstagram, FaGithub, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Education from './Education';
import Skills from './Skills';

const About = () => {
  // For choosing the option you wish to view
  const [filter, setFilter] = useState('ABOUT');
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>About Me</h2>
          </Col>
          <Col lg="4" md="3">
            <div className="about-btns d-flex flex-column align-items-center">
              <button
                className={`about-btn ${
                  filter === 'ABOUT' ? 'about-btn-active' : ''
                }`}
                onClick={() => setFilter('ABOUT')}
              >
                About me
              </button>
              <button
                className={`about-btn ${
                  filter === 'EDUCATION' ? 'about-btn-active' : ''
                }`}
                onClick={() => setFilter('EDUCATION')}
              >
                Education{' '}
              </button>
              <button
                onClick={() => setFilter('SKILLS')}
                className={`about-btn ${
                  filter === 'SKILLS' ? 'about-btn-active' : ''
                }`}
              >
                Skills
              </button>
            </div>
          </Col>
          <Col lg="8" md="9">
            {filter === 'ABOUT' && (
              <div className="about-wrap d-flex ">
                <div className="about-img">
                  <img src={aboutimg} alt="me" className="w-100" />
                </div>
                <div className="about-content w-100">
                  <h2>I'm Okoye Moses</h2>
                  <p>
                    I am a creative Front-End Developer with experience of
                    building and maintaining responsive websites. Proficient in
                    HTML, CSS, JavaScript and React; plus modern libraries and
                    frameworks.
                  </p>
                  <div className="social-links">
                    <h6>Connect with me:</h6>
                    <span>
                      <NavLink
                        target="_blank"
                        className="so"
                        to="//www.instagram.com/kingsmanmoses/"
                      >
                        <FaInstagram className="i" />
                      </NavLink>
                      <NavLink
                        target="_blank"
                        className="so"
                        to="//github.com/kingsmanmoses?tab=repositories"
                      >
                        <FaGithub className="i" />
                      </NavLink>
                      <NavLink
                        target="_blank"
                        className="so"
                        to="//twitter.com/Iceagemoses"
                      >
                        <FaTwitter className="i" />
                      </NavLink>
                      <NavLink
                        target="_blank"
                        className="so"
                        to="//www.linkedin.com/in/okoye-moses-976a5b1b5/"
                      >
                        <FaLinkedinIn className="i" />
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            )}

            {filter === 'EDUCATION' && <Education />}

            {filter === 'SKILLS' && <Skills />}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
