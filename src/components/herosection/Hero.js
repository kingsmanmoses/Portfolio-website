import React, { useRef, useEffect } from 'react';
import './hero.css';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import img from '../../img/me2.png';
import { init } from 'ityped';

const Hero = () => {
  const textref = useRef();
  useEffect(() => {
    init(textref.current, {
      backDelay: 1500,
      showCursor: true,
      strings: [
        'Okoye Moses',
        'a Front-end Developer',
        'a Product Designer',
        'a Software Developer',
      ],
    });
  }, []);

  return (
    <section className="hero-sect" id="home">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero-content">
              <p className="mb-3">Welcome to My Site!</p>
              <h2 className="hero-title mb-4">
                I'm <span ref={textref}></span>
              </h2>
              <p>
                I am a creative Front-End Developer with 2 years of experience
                building and maintaining responsive websites. Proficient in
                HTML, CSS, JavaScript and React; plus modern libraries and
                frameworks.
              </p>
              <div className=" mt-sm-4 mt-5 hero-btns d-flex align-items-center gap-4">
                <button className="btn hire-btn">
                  <NavLink
                    target="_blank"
                    className="me"
                    to="//kingsmanmoses-cv.netlify.app/"
                  >
                    View CV
                  </NavLink>
                </button>
                <button className="btn">
                  <LinkS to="contact">Contact</LinkS>
                </button>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero-img">
              <img src={img} alt="me" className=" w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
