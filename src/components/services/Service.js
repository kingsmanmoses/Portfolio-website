import React from 'react';
import './service.css';
import { Container, Row, Col } from 'reactstrap';
import { serviceData } from './Data';

const Service = () => {
  return (
    <section id="service">
      <Container>
        <Row>
          <Col lg="12" className="service-top mb-5">
            <h6>Features</h6>
            <h2>What Services I Provide</h2>
          </Col>
          {serviceData.map((item, index) => (
            <Col key={index} lg="4" md="6" sm="6">
              <div className="single-service">
                <span className="service-icon">{item.icon}</span>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Service;
