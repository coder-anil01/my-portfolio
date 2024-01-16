import React, { useEffect, useState } from 'react'
import '../style/Homepage.css'
import { FaTwitter, FaInstagram, FaLinkedinIn,FaFacebook, FaGithub } from "react-icons/fa";
import Selfipic from "../images/anil ppp.png"
import Typing from './Typing';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Homepage = () => {

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition < 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='homepage'>
      <div className='homepage-left'>
        <div className='homepage-small-text'>HEY THERE !</div>
        <div className='homepage-name'>I Am Anil</div>
        <div className='homepage-text-work'><Typing/></div>
        <div className='homepage-icons'>
          <div className='homepage-icon'><FaGithub/></div>
          <div className='homepage-icon'><FaLinkedinIn/></div>
          <div className='homepage-icon'><FaTwitter/></div>
          <div className='homepage-icon'><FaInstagram/></div>
          <div className='homepage-icon'><FaFacebook/></div>
        </div>
        <button className='homepage-button-hire'>Hire me</button>
      </div>
      {isVisible ? <img className='homepage-image' src={Selfipic} alt="profile" /> : ""}
      {isVisible ? "" : <div className='top-arrow' onClick={() => scrollToTop()}><MdKeyboardDoubleArrowUp/></div>}
    </div>
  )
}

export default Homepage
