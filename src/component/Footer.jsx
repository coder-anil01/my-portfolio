import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedinIn,FaFacebook, FaGithub } from "react-icons/fa";
import Navlogo from "../images/Navlogo.png"
import '../style/Footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-card'>
          <img className='footer-logo' src={Navlogo} alt="Profile-logo" />
          <div className='footer-icon'>
            <div><FaGithub/></div>
            <div><FaFacebook/></div>
            <div><FaLinkedinIn/></div>
            <div><FaInstagram/></div>
            <div><FaTwitter/></div>
          </div>
        </div>
        <div className='footer-card'>
          <div className='footer-m-title'>My Services</div>
            <p>Website Creating</p>
            <p>Website Seo</p>
            <p>Debuding</p>
        </div>
        <div className='footer-card'>
          <div className='footer-m-title'>Contact Me</div>
            <p><FaLocationDot/> India, Bihar, Vaishali</p>
            <p><MdEmail/> anilkrmac83@gmail.com</p>
            <p><FaPhoneAlt/> 6203493183</p>
        </div>
      </div>
      <div className='footer-buttom'>
        <div>privacy policy</div>
        <div>| |</div>
        <div>Maker:- CoderAnil</div>
        <div>| |</div>
        <div>2024</div>
      </div>
    </div>
  )
}

export default Footer
