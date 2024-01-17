import React from 'react'

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <form className="contact-form">
        <label htmlFor="name">Enter your name</label>
        <input className="contact-form-input" type="text" name="name" id="name" />

        <label htmlFor="email">Enter your email</label>
        <input className="contact-form-input" type="text" name="email" id="email" />

        <label htmlFor="subject">Enter your subject</label>
        <input className="contact-form-input" type="text" name="subject" id="subject" />
        
        <label htmlFor="message">Enter your message</label>
        <input className="contact-form-input" type="text" name="message" id="message" />
        <button type="submit">Send Mail</button>
      </form>
    </div>
  )
}

export default Contact