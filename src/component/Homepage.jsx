import React from 'react'
import '../style/Homepage.css'
import { FaTwitter, FaInstagram, FaLinkedinIn,FaFacebook, FaGithub } from "react-icons/fa";
import Selfipic from "../images/anil ppp.png"
import Typing from './Typing';


const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='homepage-left'>
        <div className='homepage-small-text'>HEY THERE !</div>
        <div className='homepage-name'>I Am Anil</div>
        <div className='homepage-text-work'><Typing/></div>
        <div className='homepage-icons'>
          <div className='homepage-icon'><FaGithub/></div>
          <div className='homepage-icon'><FaFacebook/></div>
          <div className='homepage-icon'><FaLinkedinIn/></div>
          <div className='homepage-icon'><FaInstagram/></div>
          <div className='homepage-icon'><FaTwitter/></div>
        </div>
        <button className='homepage-button-hire'>Hire me</button>
      </div>
      <img className='homepage-image' src={Selfipic} alt="profile" />
    </div>
  )
}

export default Homepage
