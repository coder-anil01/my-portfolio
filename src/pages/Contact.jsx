import React, { useState } from 'react'
import '../style/Contact.css'
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className='contact'>
      <div className='about-heading'>GET IN TOUCH</div>
      <div className='contact-container'>
        <form type='submit' className='inpute-filds'>
          <div className='contact-icon-input'><div className='contact-icon'><FaUser/></div>
            <input type="text"
              className='contact-input'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Your Name'
            />
          </div>
          <div className='contact-icon-input'><div className='contact-icon'><FaPhoneAlt/></div>
            <input type="Number"
              className='contact-input'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Enter Your Phone Number'
            />
          </div>
          <div className='contact-icon-input'><div className='contact-icon'><MdEmail/></div>
            <input type="text"
              className='contact-input'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Your Email'
            />
          </div>
          <div className='contact-icon-textarea'><div className='contact-icon'><TfiWrite/></div>
            <textarea type="text"
              className='contact-textarea'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Type Your Message... '
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
