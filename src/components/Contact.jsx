import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import contact from "../images/contact.png";
import OnScrollTextReveal from './TextReveal';


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ezwu90l', 'template_95ln0ej', form.current, {
        publicKey: 'FzY5HKZVpuHCYG_tW',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("Thank You! Message Sent")
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert("Failed to Sent")
        },
      );
  };
  return (
    <div className="contact" id="Contact">
      <OnScrollTextReveal>
      <h3>Contact<span>Me</span></h3>
      <div className="grids-contact">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required/>
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" required/>
      <input type="submit" value="Send" />
    </form> 
    <div className="image-container">
    <img src={contact} alt="contact" />
  </div>
  </div>
  </OnScrollTextReveal>
    </div>
  )
}

export default Contact