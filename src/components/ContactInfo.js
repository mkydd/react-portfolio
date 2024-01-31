import React from 'react'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function ContactInfo() {
  return (
    <div className='contact-info'>
      <div className="contact-info-card">
        <LocalPhoneOutlinedIcon 
          style={{
            border: '1px solid #cbced8',
            padding: '0.25rem',
            fontSize: '2rem'}} />
        <p className="contact-type">Phone</p>
        <p className="contact-info">+1 289-244-0493</p>
      </div>
      <div className="contact-info-card">
        <EmailOutlinedIcon 
          style={{
            border: '1px solid #cbced8',
            padding: '0.25rem',
            fontSize: '2rem'}} />
        <p className="contact-type">Email</p>
        <p className="contact-info">michael.kydd@outlook.com</p>
      </div>
      <div className="contact-info-card">
        <LocationOnOutlinedIcon 
          style={{
            border: '1px solid #cbced8',
            padding: '0.25rem',
            fontSize: '2rem'}} />
        <p className="contact-type">Location</p>
        <p className="contact-info">Hamilton, ON, Canada</p>
      </div>
    </div>
  )
}

export default ContactInfo