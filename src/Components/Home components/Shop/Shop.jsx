import React, { useState } from "react";
import "./Shop.scss";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import New_arrivals from "../Hellp/New_arrivals";
const Shop = () => {
  const [Sendst ,setSendst] = useState(1)
  return (
    <div className="Shop">
      <div className="menu_bar">
        <div className="title">
          <h2>Categories</h2>
        </div>
        <div className="categories">
          <ul>
            <li>
              <div className="category">
                <h3>House Plants</h3>
                <p>(33)</p>
              </div>
            </li>
            <li>
              <div className="category">
                <h3>Potter Plants</h3>
                <p>(12)</p>
              </div>
            </li> 
            <li>
              <div className="category">
                <h3>Seeds</h3>
                <p>(65)</p>
              </div>
            </li> 
            <li>
              <div className="category">
                <h3>Small Plants</h3>
                <p>(39)</p>
              </div>
            </li> 
            <li>
              <div className="category">
                <h3>Big Plants</h3>
                <p>(23)</p>
              </div>
            </li> 
            <li>
              <div className="category">
                <h3>Succulents</h3>
                <p>(17)</p>
              </div>
            </li> 
            <li>
              <div className="category">
                <h3>Trerrariums</h3>
                <p>(19)</p>
              </div>
            </li> 
            <li>
              <div className="category">
                <h3>Gardening</h3>
                <p>(13)</p>
              </div>
            </li> 
            <li>
              <div className="category">
                <h3>Accessories</h3>
                <p>(18)</p>
              </div>
            </li> 
            <li>
              <div className="category">
                <h3>House Plants</h3>
                <p>(33)</p>
              </div>
            </li>
          </ul>
        </div> 
        <div className="title2">
        <h2>Price Range</h2> 

        </div>
        <div className="price_range">
            <input type="range" id="change" />
            <p>Price: <span> $39 - $1230</span></p>
            <button>Filter</button>
        </div> 
        <div className="title3">
        <h2>Size</h2>

        </div>
        <div className="sizes">
            <ul>
                <li><div className="size"><h3>Small</h3><p>(119)</p></div></li>
                <li><div className="size"><h3>Medium</h3><p>(86)</p></div></li>
                <li><div className="size"><h3>Large</h3><p>(78)</p></div></li>

            </ul>
        </div> 
        <div className="sale">
            <img src="./Images/Super Sale Banner.png" alt="" />
        </div>
      </div>
      <div className="boxes_menu">
        <div className="box_titles">
            <ul>
                <li onClick={() => setSendst(1)}><p>All Plants</p></li>
                <li onClick={() => setSendst(2)}><p>New Arrivals</p></li>
                <li onClick={() => setSendst(3)}><p>Sale</p></li>
            </ul> 
            <div className="select">
                <p>Short by:</p>
                <select>
                    <option>Default sorting</option>
                    <option >Active sorting</option>

                </select>
            </div>
        </div> 
      {Sendst == 1 ?    <div className="boxes">
            <div className="box">
                <div className="image">
                <img src="./Images/box1.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p> 
                <div className="icons">
                <CiShoppingCart />
                <CiHeart />
                <CiSearch />

                </div>
            </div>
            <div className="box">
                <div className="image">
                <img src="./Images/box2.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p>
                <div className="icons">
                <CiShoppingCart />
                <CiHeart />
                <CiSearch />

                </div>
            </div> 
            <div className="box">
                <div className="image">
                <img src="./Images/box3.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p>
                <div className="icons">
                <CiShoppingCart />
                <CiHeart />
                <CiSearch />

                </div>
            </div> 
            <div className="box">
                <div className="image">
                <img src="./Images/box4.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p>
                <div className="icons">
                <CiShoppingCart />
                <CiHeart />
                <CiSearch />

                </div>
            </div> 
            <div className="box">
                <div className="image">
                <img src="./Images/box5.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p>
                <div className="icons">
                <CiShoppingCart />
                <CiHeart />
                <CiSearch />

                </div>
            </div> 
            <div className="box">
                <div className="image">
                <img src="./Images/box6.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p>
                <div className="icons">
                <CiShoppingCart />
                <CiHeart />
                <CiSearch />

                </div>
            </div> 
            <div className="box">
                <div className="image">
                <img src="./Images/box7.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p>
                <div className="icons">
                <CiShoppingCart />
                <CiHeart />
                <CiSearch />

                </div>
            </div>
            <div className="box">
                <div className="image">
                <img src="./Images/box8.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p>
                <div className="icons">
                <CiShoppingCart />
                <CiHeart />
                <CiSearch />

                </div>
            </div> 
            <div className="box">
                <div className="image">
                <img src="./Images/box9.png" alt="" />

                </div>
                <h3>Barberton Daisy</h3>
                <p>$119.00</p>
                <div className="icons">
                <CiShoppingCart />
                <CiHeart />
                <CiSearch />

                </div>
            </div>
        </div> : ""}
        {Sendst == 2 ? <New_arrivals/> : ""}
      </div>
    </div>
  );
};

export default Shop;
