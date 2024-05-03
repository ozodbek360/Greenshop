import React, { useState } from 'react'
import "./Navbar.scss"
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineLogout } from "react-icons/hi";
import { FaBarsProgress } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";  
import { HiXMark } from "react-icons/hi2";
import {  NavLink } from "react-router-dom";

const Navbar = () => {
    const [open , setOpen]=useState(false) 
    const [live , setLive]=useState(false)
 
  return (
    
    <div className='Navbar'>
        <div className="logo">
            <img src="public/Images/Logo (1).png" alt="" />
        </div> 
        <div className="pages">
            <ul>
                <li > <NavLink to={"/"}>Home</NavLink></li>
                <li> <NavLink to={"shop"}>Shop</NavLink> </li>
                <li>Plant Care</li>
                <li>Blogs</li>


            </ul>
        </div> 
         
        <div className="btn">
        <div className="icons">
        <CiSearch /> 
        <CiShoppingCart />

        </div>
            <button className='login' onClick={()=>setLive(!live)}>
            <HiOutlineLogout  className='Logout'/>
            <h2>Login</h2>

            </button>
        </div>  
        <div className="bars">
        <FaBarsProgress  className='bars_icon' onClick={()=> setOpen(!open)}/>

        </div> 
        <div className={open ? "bars_table active":"bars_table"}>
        <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Plant Care</li>
                <li>Blogs</li>


            </ul>  
           <div className="out">
           <HiMiniXMark  className='exit' onClick={()=> setOpen(false)}/>
           </div>

        </div>
       <div className={live ? "login_back live":"login_back"}>
       <div className="Login">
        <div className="exit_mark" onClick={()=>setLive(false)}>
          <HiXMark />
        </div>
        <div className="title">
            <h2>Login</h2>
            <span></span>
            <h3>Register</h3>
        </div>
        <div className="inputs">
            <p className='username'>Enter your username and password to login.</p>
            <input type="text" placeholder='almamun_uxui@outlook.com' />
            <input type="password" placeholder='password' /> 
            <p>Forgot Password?</p>
        </div>
        <div className="log_btn">
            <button>Login</button>
        </div>
        <div className="orlogin">
            <span className='bolt'></span>
            <h3>Or login with</h3>
            <span className='bolt'></span>
        </div>
        <div className="btns">
            <div className="btn1">
             <button><img src="public/Images/btn1.png" alt="" /><p>Login with Google</p></button>
            </div>
            <div className="btn2">
             <button><img src="public/Images/btn2.png" alt="" /><p>Login with Facebook</p></button>
            </div>
        </div>
    </div>
       </div>
    </div>
  )
}

export default Navbar;