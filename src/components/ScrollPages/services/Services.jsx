import React, { useState } from "react";
import "./service.css";
import { AiFillProduct } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { BsRobot } from "react-icons/bs";
import { FaTimesCircle } from "react-icons/fa";

const Services = () => {
  //! function to toggle the modal when the user presses the view more btn
  const [toggle, setToggle] = useState(0);
  //! function to set the toggle btn to a particular state or what the user presses
  const toggleTab = (index) => {
    setToggle(index);
  };
  return (
    <section className="service section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I Offer</span>

      <div className="service_cont mainCont gridCont">
        {/* //! Product Designer modal */}
        <div className="service_content">
          <div>
            <AiFillProduct className="service_icon" />
            <h3 className="service_title">
              Product <br /> Designer
            </h3>
          </div>
          <span className="service_btn" onClick={() => toggleTab(1)}>
            View More <FaArrowRight className="arrow_right" />
          </span>
          <div
            className={
              toggle === 1 ? "service_modal active_modal" : "service_modal"
            }
          >
            <div className="service_modalContent">
              <FaTimesCircle
                className="service_modalClose"
                onClick={() => toggleTab(0)}
              />
              <h3 className="service_modalTitle">
                Product <br /> Designer
              </h3>
              <p className="service_modalDesc">
                In Service for more than 4 years of experience. Providing
                quality work to clients and companies.
              </p>
              <ul className="service_modalService">
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I conduct market research, identify trends, and define
                    target personas.
                  </p>
                </li>
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I create visually appealing designs that align with brand
                    aesthetics.
                  </p>
                </li>
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I develop concepts suitable for prototyping and testing.
                  </p>
                </li>
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I create compelling visual representations of product ideas.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* //! Web developer modal */}
        <div className="service_content">
          <div>
            <MdWeb className="service_icon" />
            <h3 className="service_title">
              Web <br /> Developer
            </h3>
          </div>
          <span className="service_btn" onClick={() => toggleTab(2)}>
            View More <FaArrowRight className="arrow_right" />
          </span>
          <div
            className={
              toggle === 2 ? "service_modal active_modal" : "service_modal"
            }
          >
            <div className="service_modalContent">
              <FaTimesCircle
                className="service_modalClose"
                onClick={() => toggleTab(0)}
              />
              <h3 className="service_modalTitle">
                Web <br /> Developer
              </h3>
              <p className="service_modalDesc">
                In Service for more than 4 years of experience. Providing
                quality work to clients and companies.
              </p>
              <ul className="service_modalService">
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I create visually appealing and functional websites.
                  </p>
                </li>
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I develop engaging website content, including text, images,
                    and multimedia.
                  </p>
                </li>
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I optimize content for search engines (SEO) and social media
                    platforms.
                  </p>
                </li>
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I Implement tools like Google Analytics to monitor website
                    performance and user behavior.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* //! Machine and AI modal */}
        <div className="service_content">
          <div>
            <BsRobot className="service_icon" />
            <h3 className="service_title">
              AI/Machine Learning
              <br /> Developer
            </h3>
          </div>
          <span className="service_btn" onClick={() => toggleTab(3)}>
            View More <FaArrowRight className="arrow_right" />
          </span>
          <div
            c
            className={
              toggle === 3 ? "service_modal active_modal" : "service_modal"
            }
          >
            <div className="service_modalContent">
              <FaTimesCircle
                className="service_modalClose"
                onClick={() => toggleTab(0)}
              />
              <h3 className="service_modalTitle">
                AI/Machine Learning
                <br /> Developer
              </h3>
              <p className="service_modalDesc">
                In Service for more than 4 years of experience. Providing
                quality work to clients and companies.
              </p>
              <ul className="service_modalService">
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I create and train custom ML models for specific tasks.
                  </p>
                </li>
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I clean, transform, and prepare data for ML algorithms.
                  </p>
                </li>
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I choose appropriate ML algorithms and optimize their
                    parameters.
                  </p>
                </li>
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I build predictive models for time-dependent data.
                  </p>
                </li>
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I deploy ML models in production environments and integrate
                    them with existing systems.
                  </p>
                </li>
                <li className="service_listService">
                  <div>
                    <FaCircleCheck className="service_modalIcon" />
                  </div>
                  <p className="service_info">
                    I continuously improve model accuracy and efficiency.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
