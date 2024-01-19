import React, { useEffect, useState } from 'react'
import DashbordNavbar from '../component/DashbordNavbar'
import Blogimage from '../images/project.jpeg'
import axios from 'axios'
import '../style/BlogAdmin.css'


const BlogAdmin = () => {

  const [blog, setBlog] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const [videourl, setVideourl] = useState("")
  const [pass, setPass] = useState("")

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
      await axios.post('https://coderanilblog.onrender.com/api/v1/blog/create', {title, description, image, video_url: videourl, pass: "coder8987ani"})
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
              <img className='dashbord-blog-image' src={Blogimage} alt="blog" />
              <div className='dashbord-blog-title'>{b?.title}</div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  )
}

export default BlogAdmin
