import React, { useRef, useState } from 'react'
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
  const[menuopen, setMenuopen] = useState(false);

  const scrollHandler = (elementRef) => {
    setMenuopen(false)
    window.scrollTo({
      top: elementRef.current.offsetTop - 70,
      behavior: 'smooth'
    })
  }

    return (
    <>
    <div className='navbar'>
      <div className='navbar-image-card'><img className='navbar-image' src={Navlogo} alt="Navlogo" /></div>
      <div className='navbar-item-box'>
        <NavLink onClick={() => scrollHandler(home)} className='navbar-item'>Home</NavLink>
        <NavLink onClick={() => scrollHandler(about)} className='navbar-item'>About</NavLink>
        <NavLink onClick={() => scrollHandler(skills)} className='navbar-item'>Skills</NavLink>
        <NavLink onClick={() => scrollHandler(services)} className='navbar-item'>Service</NavLink>
        <NavLink onClick={() => scrollHandler(blogs)} className='navbar-item'>Blogs</NavLink>
        <NavLink onClick={() => scrollHandler(contact)} className='navbar-item'>Contacts</NavLink>
      </div>
    </div>
    <div className='res-navbar'>
      <div className='res-navbar-image-card'><img className='res-navbar-image' src={Navlogo} alt="Navlogo" /></div>
      {menuopen ? <>
      <div onClick={() => setMenuopen(false)} className='res-navbar-menu-cross'>
        <span className='res-navbar-menu-cross-first'></span>
        <span className='res-navbar-menu-cross-sec'></span>
      </div></> : <>
      <><div onClick={() => setMenuopen(true)} className='res-navbar-menu'>
          <span></span>
          <span></span>
          <span></span>
        </div></> </>}
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
    {menuopen ? <>
      <div className='res-navbar-item-box'>
        <NavLink className='res-navbar-item' onClick={() => scrollHandler(home)} >Home</NavLink>
        <NavLink className='res-navbar-item' onClick={() => scrollHandler(about)} >About</NavLink>
        <NavLink className='res-navbar-item' onClick={() => scrollHandler(skills)} >Skills</NavLink>
        <NavLink className='res-navbar-item' onClick={() => scrollHandler(services)} >Service</NavLink>
        <NavLink className='res-navbar-item' onClick={() => scrollHandler(blogs)} >Blogs</NavLink>
        <NavLink className='res-navbar-item' onClick={() => scrollHandler(contact)} >Contacts</NavLink>
      </div></> : "" }
    
    </>
  )
}

export default Navbar
