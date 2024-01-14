import React, { useRef } from 'react'
import Navlogo from "../images/Navlogo.png"
import { NavLink } from 'react-router-dom'
import About from '../pages/About';
import Homepage from './Homepage';
import Services from '../pages/Services';
import Blogs from '../pages/Blogs';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';

const Navbar = () => {

  const home = useRef();
  const about = useRef();
  const skills = useRef();
  const services = useRef();
  const blogs = useRef();
  const contact = useRef();

  const scrollHandler = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

    return (
    <>
    <div className='navbar'>
      <div className='navbar-image-card'><img className='navbar-image' src={Navlogo} alt="Navlogo" /></div>
      <div className='navbar-item-box'>
        <NavLink activeClassName="active" onClick={() => scrollHandler(home)} className='navbar-item'>Home</NavLink>
        <NavLink activeClassName="active" onClick={() => scrollHandler(about)} className='navbar-item'>About</NavLink>
        <NavLink activeClassName="active" onClick={() => scrollHandler(skills)} className='navbar-item'>Skills</NavLink>
        <NavLink activeClassName="active" onClick={() => scrollHandler(services)} className='navbar-item'>Service</NavLink>
        <NavLink activeClassName="active" onClick={() => scrollHandler(blogs)} className='navbar-item'>Blogs</NavLink>
        <NavLink activeClassName="active" onClick={() => scrollHandler(contact)} className='navbar-item'>Contacts</NavLink>
      </div>
    </div>

    <div>
      <div ref={home}><Homepage /></div>
      <div ref={about}><About /></div>
      <div ref={skills}><Skills /></div>
      <div ref={services}><Services /></div>
      <div ref={blogs}><Blogs /></div>
      <div ref={contact}><Contact /></div>
    </div>

    <div>
    </div>
    </>
  )
}

export default Navbar
