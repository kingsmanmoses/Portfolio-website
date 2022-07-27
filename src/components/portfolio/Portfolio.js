import React from 'react';
import './port.css';
import { Container, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { portData } from './Data';

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Container>
        <Row>
          <Col lg="12" className="port-top mb-4">
            <h6>Explore My Work And Give a Feedback</h6>
            <h2>Portfolio</h2>
          </Col>

          {portData.map((item, index) => (
            <Col lg="4" md="6" sm="6" key={index}>
              <div className="port-card mb-5">
                <div className="port-img">
                  <img src={item.img} alt="portfolio" className="w-100" />
                </div>
                <div className="port-content">
                  <h5>{item.title}</h5>
                  <NavLink target="_blank" className="pa" to={item.url}>
                    View Live Project
                  </NavLink>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
