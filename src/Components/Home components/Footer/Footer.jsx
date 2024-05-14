import React from "react";
import "./Footer.scss";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaUser } from "react-icons/fa";
import { LuScanLine } from "react-icons/lu";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_boxes">
        <div className="box_table">
          <div className="box">
            <div className="image">
              <img src="public/Images/f_box1.png" alt="" />
              <h2>Garden Care</h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="image">
              <img src="public/Images/f_box1.png" alt="" />
              <h2>Garden Care</h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div> 
          <div className="box">
            <div className="image">
              <img src="public/Images/f_box1.png" alt="" />
              <h2>Garden Care</h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
        </div>
        <div className="input">
          <h2>Would you like to join newsletters?</h2>
          <form>
            <input type="text" placeholder="enter your email address..." />
            <button>Join</button>
          </form>
          <p>
            We usually post offers and challenges in newsletter. We're your
            online houseplant destination. We offer a wide range of houseplants
            and accessories shipped directly from our (green)house to yours!{" "}
          </p>
        </div>
      </div>
      <div className="contact">
        <div className="image">
          <img src="public/Images/Logo.png" alt="" />
        </div>
        <ul>
          <li>
            <CiLocationOn />
            <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          </li>
          <li>
            <CiMail />
            <p>contact@greenshop.com</p>
          </li>
          <li>
            <LuPhoneCall />
            <p>+88 01911 717 490</p>
          </li>
        </ul>
      </div> 
      <div className="categories">
        <div className="category_table">
        <ul>
            <li>My Account</li>
            <li>My Account</li>
            <li>Our stores</li>
            <li>Contact us</li>
            <li>Career</li>
            <li>Specials</li>
        </ul>
        <ul>
            <li>Help & Guide</li>
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Shipping & Delivery</li>
            <li>Product Policy</li>
            <li>How to Return</li>
        </ul>
        <ul>
            <li>Categories</li>
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Accessories</li>
        </ul>
        </div> 
        <div className="social">
            <div className="media">
                <h2>Social Media</h2>
            <ul>
                <li><FaFacebookF /></li>
                <li><FaInstagram /></li>
                <li><FaTwitter /></li>
                <li><FaLinkedinIn /></li>
                <li><FaYoutube /></li>
            </ul>
            </div> 
            <div className="app">
                <h2>We accept</h2>
                <img src="https://cdn.shopify.com/s/files/1/0088/6407/1739/files/paypal-1.png?v=1536853722" alt="" />
            </div>
        </div>
      </div> 
      <div className="media_footer">
        <ul>
          <li><Link to={"/"}><HiHome /></Link></li>
          <li><FaHeart /></li>
         
        </ul>
        <div className="scan">
          <Link to={"https://products.aspose.app/barcode/ru/recognize/qr"}><LuScanLine  / ></Link>

        </div>
        <ul>
          <li><Link to={"shop"}><PiShoppingCartSimpleFill /></Link></li>
          <li><Link to={"login"}><FaUser /></Link></li>
         
        </ul>
      </div>
    </div>
  );
};

export default Footer;
