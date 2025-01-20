import React, { useRef } from "react";
import "./contact.css";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
//! importing emailjs
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          //! For sweet alert message popup
          Swal.fire({
            title: "Email Sent!",
            text: "Press Button Below to Continue",
            icon: "success",
            confirmButtonText: "Okay",
          });
          e.target.reset();
        },
        () => {
          Swal.fire({
            title: "Email Not Sent!",
            text: "Press Button Below to Continue",
            icon: "error",
            confirmButtonText: "Okay",
          });
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get In Touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact_cont mainCont gridCont">
        <div className="contact_content">
          <h3 className="contact_title">Talk To Me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <MdEmail className="contact_cardIcon text-red-600" />
              <h3 className="contact_cardTitle">Email</h3>
              <span className="contact_cardData">kingsmanmoses@gmail.com</span>
              <a
                href="mailto:kingsmanmoses@gmail.com"
                rel="noreferrer"
                className="contact_btn"
                target="_blank"
              >
                Connect with Me <FaArrowRight className="btnIcon" />
              </a>
            </div>

            <div className="contact_card">
              <IoLogoWhatsapp className="contact_cardIcon text-green-700" />
              <h3 className="contact_cardTitle">Whatsapp</h3>
              <span className="contact_cardData">+44-7923-958322</span>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=07923958322"
                className="contact_btn"
              >
                Connect with Me
                <FaArrowRight className="btnIcon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Let Me Bring Your Project to Life</h3>

          <form className="contact_form" ref={form} onSubmit={sendEmail}>
            <div className="formCont">
              <label className="formTag">Name</label>
              <input
                type="text"
                name="name"
                className="formInput"
                placeholder="Insert Your Name"
                required
              />
            </div>

            <div className="formCont">
              <label className="formTag">Email</label>
              <input
                type="email"
                name="email"
                className="formInput"
                placeholder="Insert Your Email"
                required
              />
            </div>

            <div className="formCont formArea">
              <label className="formTag">Project Idea</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="formInput"
                placeholder="Write Your Project Idea"
                required
              ></textarea>
            </div>

            <button className="form_btn button button--flex">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
