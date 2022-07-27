import React from 'react';
import './testimo.css';
import { Container, Row, Col } from 'reactstrap';
import Slider from 'react-slick';

const Testimonals = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h1>What My Clients Say</h1>
          </Col>
          <Col lg="6" className="m-auto">
            <Slider {...settings} className="slide">
              <div>
                <div className="single-testi">
                  <p>
                    I find Okoye Moses to be quite an interesting Web Developer.
                    He tries to get the job done and also tries to deliver the
                    jobs fast and before deadline.
                  </p>
                  <h6>Okoye Okwuchukwu</h6>
                  <p className="comp">CEO of P-Tech Consult</p>
                </div>
              </div>
              <div>
                <div className="single-testi">
                  <p>
                    I find Okoye Moses to be the best Developer I have seen, he
                    gets the work done on time and makes the work always stand
                    out I highly recommend him for any project you wish to work
                    on.
                  </p>
                  <h6>Paul Nnaemekachukwu</h6>
                  <p className="comp">CEO of 55LIFT Consult</p>
                </div>
              </div>
              <div>
                <div className="single-testi">
                  <p>
                    Okoye Moses has been the best man I always call for any
                    project idea and I don't know how but he gets to bring the
                    creativity to LIFE. over highly recommend him.
                  </p>
                  <h6>Joshua Kanayochukwu.</h6>
                  <p className="comp">CEO of SPSK Corporate</p>
                </div>
              </div>
            </Slider>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonals;
