import React from 'react'
import Servers from '../images/serversroom.jpeg'
import '../style/Blogs.css'

const Blogs = () => {
  return (
    <div className='blog'>
      <div className='about-heading'>Latest Blogs Post</div>
      <div className='blog-container'>
        <div className='blog-card'>
          <img className='blog-card-image' src={Servers} alt="" />
          <div className='blog-card-title' >What is Database...</div>
        </div>
        <div className='blog-card'>
          <img className='blog-card-image' src={Servers} alt="" />
          <div className='blog-card-title' >What is Database...</div>
        </div>
        <div className='blog-card'>
          <img className='blog-card-image' src={Servers} alt="" />
          <div className='blog-card-title' >What is Database...</div>
        </div>
        <div className='blog-card'>
          <img className='blog-card-image' src={Servers} alt="" />
          <div className='blog-card-title' >What is Database...</div>
        </div>
        <div className='blog-card'>
          <img className='blog-card-image' src={Servers} alt="" />
          <div className='blog-card-title' >What is Database...</div>
        </div>
        <div className='blog-card'>
          <img className='blog-card-image' src={Servers} alt="" />
          <div className='blog-card-title' >What is Database...</div>
        </div>
        <div className='blog-card'>
          <img className='blog-card-image' src={Servers} alt="" />
          <div className='blog-card-title' >What is Database...</div>
        </div>
        <div className='blog-card'>
          <img className='blog-card-image' src={Servers} alt="" />
          <div className='blog-card-title' >What is Database...</div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
