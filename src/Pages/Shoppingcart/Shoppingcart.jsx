import React, { useState } from "react";
import "./Shoppingcart.scss";
import Shop_slider from "../../Components/Shop components/Shop_slider/Shop_slider";
import { LuTrash } from "react-icons/lu";
import { Link } from "react-router-dom";

const Shoppingcart = () => {
  const [Sleds, setSleds] = useState(1);

  return (
    <div className="shopping_cartpage">
      <div className="shop_title">
        <Link to={"/"}>Home /</Link>
        <span>
          {" "}
          <Link to={"/shop"}>Shop / </Link>
        </span>
        <span> Shoppin Cart </span>
      </div>
      <div className="shoppingcart">
        <div className="products">
          <div className="product_title">
            <h2>Products</h2>
            <ul>
              <li>Price</li>
              <li>Quantity</li>
              <li>Total</li>
            </ul>
          </div>
          <div className="product_boxes">
            <div className="box">
              <div className="personal">
                <img src="public/Images/box1.png" alt="rasm bor" />
                <div className="text">
                  <h3>Barberton Daisy</h3>
                  <p>
                    SKU: <span> 1995751877966</span>
                  </p>
                </div>
              </div>
              <div className="half_total">
              <div className="price">
                <p>$119.00</p>
              </div>
              <div className="quantity">
                <span onClick={() => setSleds(Sleds <= 1 ? 1 : Sleds - 1)}>
                  <h2>-</h2>
                </span>
                <h3>{Sleds}</h3>
                <span onClick={() => setSleds(Sleds + 1)}>
                  <h2>+</h2>
                </span>
              </div>
              <div className="total">
                <h2>$238.00</h2>
              </div>
              </div>
              <div className="delete">
                <LuTrash />
              </div>
            </div>
            <div className="box">
              <div className="personal">
                <img src="public/Images/box1.png" alt="rasm bor" />
                <div className="text">
                  <h3>Barberton Daisy</h3>
                  <p>
                    SKU: <span> 1995751877966</span>
                  </p>
                </div>
              </div>
              <div className="half_total">
              <div className="price">
                <p>$119.00</p>
              </div>
              <div className="quantity">
                <span onClick={() => setSleds(Sleds <= 1 ? 1 : Sleds - 1)}>
                  <h2>-</h2>
                </span>
                <h3>{Sleds}</h3>
                <span onClick={() => setSleds(Sleds + 1)}>
                  <h2>+</h2>
                </span>
              </div>
              <div className="total">
                <h2>$238.00</h2>
              </div>
              </div>
              <div className="delete">
                <LuTrash />
              </div>
            </div> 
            <div className="box">
              <div className="personal">
                <img src="public/Images/box1.png" alt="rasm bor" />
                <div className="text">
                  <h3>Barberton Daisy</h3>
                  <p>
                    SKU: <span> 1995751877966</span>
                  </p>
                </div>
              </div>
              <div className="half_total">
              <div className="price">
                <p>$119.00</p>
              </div>
              <div className="quantity">
                <span onClick={() => setSleds(Sleds <= 1 ? 1 : Sleds - 1)}>
                  <h2>-</h2>
                </span>
                <h3>{Sleds}</h3>
                <span onClick={() => setSleds(Sleds + 1)}>
                  <h2>+</h2>
                </span>
              </div>
              <div className="total">
                <h2>$238.00</h2>
              </div>
              </div>
              <div className="delete">
                <LuTrash />
              </div>
            </div> 
            <div className="box">
              <div className="personal">
                <img src="public/Images/box1.png" alt="rasm bor" />
                <div className="text">
                  <h3>Barberton Daisy</h3>
                  <p>
                    SKU: <span> 1995751877966</span>
                  </p>
                </div>
              </div>
              <div className="half_total">
              <div className="price">
                <p>$119.00</p>
              </div>
              <div className="quantity">
                <span onClick={() => setSleds(Sleds <= 1 ? 1 : Sleds - 1)}>
                  <h2>-</h2>
                </span>
                <h3>{Sleds}</h3>
                <span onClick={() => setSleds(Sleds + 1)}>
                  <h2>+</h2>
                </span>
              </div>
              <div className="total">
                <h2>$238.00</h2>
              </div>
              </div>
              <div className="delete">
                <LuTrash />
              </div>
            </div> 
            <div className="box">
              <div className="personal">
                <img src="public/Images/box1.png" alt="rasm bor" />
                <div className="text">
                  <h3>Barberton Daisy</h3>
                  <p>
                    SKU: <span> 1995751877966</span>
                  </p>
                </div>
              </div>
              <div className="half_total">
              <div className="price">
                <p>$119.00</p>
              </div>
              <div className="quantity">
                <span onClick={() => setSleds(Sleds <= 1 ? 1 : Sleds - 1)}>
                  <h2>-</h2>
                </span>
                <h3>{Sleds}</h3>
                <span onClick={() => setSleds(Sleds + 1)}>
                  <h2>+</h2>
                </span>
              </div>
              <div className="total">
                <h2>$238.00</h2>
              </div>
              </div>
              <div className="delete">
                <LuTrash />
              </div>
            </div> 
            <div className="box">
              <div className="personal">
                <img src="public/Images/box1.png" alt="rasm bor" />
                <div className="text">
                  <h3>Barberton Daisy</h3>
                  <p>
                    SKU: <span> 1995751877966</span>
                  </p>
                </div>
              </div>
              <div className="half_total">
              <div className="price">
                <p>$119.00</p>
              </div>
              <div className="quantity">
                <span onClick={() => setSleds(Sleds <= 1 ? 1 : Sleds - 1)}>
                  <h2>-</h2>
                </span>
                <h3>{Sleds}</h3>
                <span onClick={() => setSleds(Sleds + 1)}>
                  <h2>+</h2>
                </span>
              </div>
              <div className="total">
                <h2>$238.00</h2>
              </div>
              </div>
              <div className="delete">
                <LuTrash />
              </div>
            </div> 
            <div className="box">
              <div className="personal">
                <img src="public/Images/box1.png" alt="rasm bor" />
                <div className="text">
                  <h3>Barberton Daisy</h3>
                  <p>
                    SKU: <span> 1995751877966</span>
                  </p>
                </div>
              </div>
              <div className="half_total">
              <div className="price">
                <p>$119.00</p>
              </div>
              <div className="quantity">
                <span onClick={() => setSleds(Sleds <= 1 ? 1 : Sleds - 1)}>
                  <h2>-</h2>
                </span>
                <h3>{Sleds}</h3>
                <span onClick={() => setSleds(Sleds + 1)}>
                  <h2>+</h2>
                </span>
              </div>
              <div className="total">
                <h2>$238.00</h2>
              </div>
              </div>
              <div className="delete">
                <LuTrash />
              </div>
            </div>
           
          </div>
        </div>
        <div className="totals">
          <h2>Cart Totals</h2>
          <hr />
          <p>Coupon Apply</p>
          <form>
            <input type="text" placeholder="Enter coupon code here..." />
            <button>Apply</button>
          </form>
          <div className="subtotal">
            <ul>
              <li>
                <h3>Subtotal</h3>
                <p>$2,683.00</p>
              </li>
              <li>
                <h3>Coupon Discount</h3>
                <p>(-) 00.00</p>
              </li>
              <li>
                <h3>Shiping</h3>
                <p>$16.00</p>
              </li>
            </ul>
          </div>
          <div className="view">
            <p>View shipping charge</p>
          </div>
          <div className="total">
            <h2>Total</h2>
            <p>$2,699.00</p>
          </div>
          <div className="card_btns">
            <button>Proceed To Checkout</button>
            <p>Continue Shopping</p>
          </div>
        </div>
      </div>
      <Shop_slider />
    </div>
  );
};

export default Shoppingcart;
