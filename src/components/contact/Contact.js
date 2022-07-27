import React from 'react';
import './contact.css';
import { Container, Row, Col } from 'reactstrap';
import Form from './form/Form';

const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2>Get In Touch With Me</h2>
          </Col>
          <Col lg="6" md="6" className="con">
            <div className="cont-info d-flex align-items-center gap-4">
              <div className="info-box w-50">
                <h6>Phone</h6>
                <p>+234 813 105 8146</p>
              </div>
              <div className="info-box w-50">
                <h6>Email</h6>
                <p>kingsmanmoses@gmail.com</p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
