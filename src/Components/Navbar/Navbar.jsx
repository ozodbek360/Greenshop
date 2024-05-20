import React, { useState } from "react";
import "./Navbar.scss";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineLogout } from "react-icons/hi";
import { FaBarsProgress } from "react-icons/fa6";
import { HiMiniXMark } from "react-icons/hi2";
import { HiXMark } from "react-icons/hi2";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [live, setLive] = useState(false);
  const [login, setLogin] = useState(1);
  return (
    <div className="Navbar">
      <div className="logo">
        <img src="./Images/Logo.png" alt="" />
      </div>
      <div className="pages">
        <ul>
          <li>
            
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            
            <NavLink to={"shop"}>Shop</NavLink>
          </li>
          <li><NavLink to={"plantcare"}>Plant Care</NavLink></li>
          <li><NavLink to={"blogs"}>Blogs</NavLink></li>
        </ul>
      </div>

      <div className="btn">
        <div className="icons">
          
          <Link to={"search"}><CiSearch/></Link>
          <Link to={"shopcart"}><CiShoppingCart /></Link>
        </div>
        <button className="login" onClick={() => setLive(!live)}>
          <HiOutlineLogout className="Logout" />
          <h2>Login</h2>
        </button>
      </div>
      <div className="bars">
        <FaBarsProgress className="bars_icon" onClick={() => setOpen(!open)} />
      </div>
      <div className={open ? "bars_table active" : "bars_table"}>
      <ul>
          <li>
            
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            
            <NavLink to={"shop"}>Shop</NavLink>
          </li>
          <li><NavLink to={"plantcare"}>Plant Care</NavLink></li>
          <li><NavLink to={"blogs"}>Blogs</NavLink></li>
        </ul>
        <div className="out">
          <HiMiniXMark className="exit" onClick={() => setOpen(false)} />
        </div>
      </div>
      <div className={live ? "login_back live" : "login_back"}>
        <div className="Login">
          <div className="exit_mark" onClick={() => setLive(false)}>
            <HiXMark />
          </div>
          <div className="title">
            <h2 onClick={() => setLogin(1)}>Login</h2>
            <span></span>
            <h3 onClick={() => setLogin(2)}>Register</h3>
          </div>
          {login == 1 ? (
            <div className="login_box">
              <div className="inputs">
                <p className="username">
                  Enter your username and password to login.
                </p>
                <input type="text" placeholder="almamun_uxui@outlook.com" />
                <input type="password" placeholder="password" />
                <p>Forgot Password?</p>
              </div>
              <div className="log_btn">
                <button>Login</button>
              </div>
              <div className="orlogin">
                <span className="bolt"></span>
                <h3>Or login with</h3>
                <span className="bolt"></span>
              </div>
              <div className="btns">
                <div className="btn1">
                  <button>
                    <img src="public/Images/btn1.png" alt="" />
                    <p>Login with Google</p>
                  </button>
                </div>
                <div className="btn2">
                  <button>
                    <img src="public/Images/btn2.png" alt="" />
                    <p>Login with Facebook</p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {login == 2 ? (
            <div className="login_box">
              <div className="inputs">
                <p className="username">
                  Enter your username and password to login.
                </p>
                <input type="text" placeholder="Username" />
                <input type="text" placeholder="Enter your email address" />

                <input type="password" placeholder="password" />
                <input type="text" placeholder="Confirm Password" />

                <p>Forgot Password?</p>
              </div>
              <div className="log_btn">
                <button>Login</button>
              </div>
              <div className="orlogin">
                <span className="bolt"></span>
                <h3>Or register with</h3>
                <span className="bolt"></span>
              </div>
              <div className="btns">
                <div className="btn1">
                  <button>
                    <img src="public/Images/btn1.png" alt="" />
                    <p>Login with Google</p>
                  </button>
                </div>
                <div className="btn2">
                  <button>
                    <img src="public/Images/btn2.png" alt="" />
                    <p>Login with Facebook</p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      
      
    </div>
  );
};

export default Navbar;
