import React, { useEffect, useState } from 'react'
import DashbordNavbar from '../component/DashbordNavbar'
import Blogimage from '../images/project.jpeg'
import axios from 'axios'
import '../style/BlogAdmin.css'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom'
import {Modal} from 'antd'

const BlogAdmin = () => {

  const [blog, setBlog] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [videourl, setVideourl] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogid, setBlogid] = useState("");
  const [blogrtitle, setBlogtitle] = useState("");
  const pass = "coder8987ani";

  const handleOk = async () => {
    try {
      const {data} = await axios.post(`https://coderanilblog.onrender.com/api/v1/blog/delete/${blogid}`, {pass})
      getBlog()
      console.log(data)
      if(data.success){
        setIsModalOpen(false);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };



  const getBlog = async() => {
    try {
      const {data} = await axios.get('https://coderanilblog.onrender.com/api/v1/blog/get');
      setBlog(data.blogs)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getBlog();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://coderanilblog.onrender.com/api/v1/blog/create', {title, description, image, video_url: videourl, pass})
      getBlog()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
    <DashbordNavbar/>
      <div className='dashbord-blog-main'>
        <div className='dashbord-blog-container'>
{/* Add New */}
          <form onSubmit={handleCreate} className='dashbord-blog-create-container'>
            <input type="text"
              className='dashbord-blog-input'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder='Enter Heading' />
              
            <input type="text"
              className='dashbord-blog-input'
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder='Enter Image Url' />

            <input type="text"
              className='dashbord-blog-input'
              value={videourl}
              onChange={(e) => setVideourl(e.target.value)}
              placeholder='Enter Video Url' />

            <input type="text"
              className='dashbord-blog-input'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder='Enter Description' />
            <button className='homepage-button-hire' type='submit'>Submit</button>
          </form>
{/* SHOW */}
        <div className='dashbord-blog-show'>
          {blog?.map((b) => (
            <div key={b._id} className='dashbord-blog-card'>
              <Link to={`/blog/${b._id}`}><img className='dashbord-blog-image' src={Blogimage} alt="blog" /></Link>
              <div className='dashbord-blog-buttom'>
                <div className='dashbord-blog-title'>{b?.title.slice(0,20)}...</div>
                <div onClick={() => (setIsModalOpen(true), setBlogid(b._id), setBlogtitle(b.title))} className='dashbord-blog-delete'><MdDelete/></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Modal title="Delete Blog" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <h3>{blogrtitle}</h3>
      </Modal>
    </>
  )
}

export default BlogAdmin
