import React from 'react'
import "./Shopping_page.scss"
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { Rating } from '@mui/material';
const Shopping_page = () => {
  return (
    <div className='shop_page'>
      <div className="shop_title">
       
      <NavLink to={"/"}>Home /</NavLink>
      <span> Shop </span>

          

        
      </div> 
      <div className="box">
        <div className="box_image">
          <div className="mini_boxes">
            <div className="box">
              <img src="./Images/mini1.png" alt="" />
            </div>
            <div className="box">
              <img src="./Images/mini2.png" alt="" />
            </div> 
            <div className="box">
              <img src="./Images/mini1.png" alt="" />
            </div> 
            <div className="box">
              <img src="./Images/mini2.png" alt="" />
            </div> 
          </div> 
          <div className="max_box">
            <img src="./Images/max.png" alt="" />
          </div>
        </div>
        <div className="box_text">
          <h1>Barberton Daisy</h1>
          <div className="sum">
            <h2>$119.00</h2> 
            <Rating className='rating' name="half-rating" defaultValue={2.5} precision={0.5}/>
            <p>19 Customer Review</p>
          </div>
          <div className="text">
            <hr />
            <h3>Short Description:</h3>
            <p>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
          </div>
          <div className="sizes">
            <h3>Size:</h3>
            <ul>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
            </ul>
          </div> 
          <div className="btns">
            <div className="number"></div>
            <button className='buy'>Buy NOW</button>
            <button className='buy'><Link to={"/shopcart"}>Add to cart</Link></button>
            <button className='like'><FaRegHeart /></button>
          </div> 
          <div className="categories">
            <p><span>SKU:</span> 1995751877966</p>
            <p><span>Categories:</span> Potter Plants</p>
            <p><span>Tags: </span>Home, Garden, Plants</p>
          </div> 
          <div className="share">
            <h3>Share this products:</h3>
            <ul>
                <li><FaFacebookF /></li>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
                <li><FaLinkedinIn /></li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Shopping_page