import React from 'react'
import "./Blog.scss"
import { GoArrowRight } from "react-icons/go";

const Blog = () => {
  return (
    <div className='Blog'>
        <div className="blog_title">
            <h1>Our Blog Posts</h1>
            <p>We are an online plant shop offering a wide range of cheap and trendy plants. </p>
        </div>
        <div className="boxes">
            <div className="box">
            <div className="image">
                <img src="public/Images/blog1.png" alt="" />
            </div>
           <div className="box_text">
           <h4>September 12  I Read in 6 minutes</h4>
            <h2>Cactus & Succulent Care Tips</h2>
            <p>Cacti are succulents are easy care plants for any home or patio. </p>
            <h5>Read More <GoArrowRight /></h5>
           </div>
            </div>
            <div className="box">
            <div className="image">
                <img src="public/Images/blog1.png" alt="" />
            </div>
           <div className="box_text">
           <h4>September 12  I Read in 6 minutes</h4>
            <h2>Cactus & Succulent Care Tips</h2>
            <p>Cacti are succulents are easy care plants for any home or patio. </p>
            <h5>Read More <GoArrowRight /></h5>
           </div>
            </div> 
            <div className="box">
            <div className="image">
                <img src="public/Images/blog1.png" alt="" />
            </div>
           <div className="box_text">
           <h4>September 12  I Read in 6 minutes</h4>
            <h2>Cactus & Succulent Care Tips</h2>
            <p>Cacti are succulents are easy care plants for any home or patio. </p>
            <h5>Read More <GoArrowRight /></h5>
           </div>
            </div> 
            <div className="box">
            <div className="image">
                <img src="public/Images/blog1.png" alt="" />
            </div>
           <div className="box_text">
           <h4>September 12  I Read in 6 minutes</h4>
            <h2>Cactus & Succulent Care Tips</h2>
            <p>Cacti are succulents are easy care plants for any home or patio. </p>
            <h5>Read More <GoArrowRight /></h5>
           </div>
            </div>
        </div>

    </div>
  )
}

export default Blog