import React from 'react';
import './form.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// toast.configure();
const Form = () => {
  // For sending email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'moses_template', e.target, 'FBQPTtc11_bVxAJ_P')
      .then(
        (result) => {
          toast.success('Successful', { position: toast.POSITION.BOTTOM_LEFT });
        },
        (error) => {
          toast.warn('Successful', { position: toast.POSITION.BOTTOM_LEFT });
        }
      );
    e.target.reset();
  };

  // For the alert box

  return (
    <form className="form" onSubmit={sendEmail}>
      <div className="form-input">
        <input name="name" type="text" placeholder="Your Name" />
      </div>
      <div className="form-input">
        <input name="email" type="email" placeholder="Your Email" />
      </div>
      <div className="form-input">
        <textarea name="message" placeholder="Write Message...."></textarea>
      </div>

      <button className="submit-btn" type="submit">
        Submit
      </button>
      <ToastContainer />
    </form>
  );
};

export default Form;
