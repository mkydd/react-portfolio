import React from 'react'
import ContactInfo from './ContactInfo'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef()

  function sendEmail(e) {
    e.preventDefault()

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, 
        process.env.REACT_APP_TEMPLATE_ID, 
        form.current, 
        process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }

  return (
    <div>
      <h1>Contact</h1>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Enter your name*</label>
        <input className="contact-form-input" type="text" name="name" id="name" required />

        <label htmlFor="email">Enter your email*</label>
        <input className="contact-form-input" type="email" name="email" id="email" required />

        <label htmlFor="subject">Enter your subject</label>
        <input className="contact-form-input" type="text" name="subject" id="subject"  />
        
        <label htmlFor="message">Enter your message*</label>
        <input className="contact-form-input" type="text" name="message" id="message" required />
        <button type="submit">Send Mail</button>
      </form>

      <ContactInfo />
    </div>
  )
}

export default Contact