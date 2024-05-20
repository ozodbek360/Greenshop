import React from 'react'
import "./Shop_card"
const Shop_card = () => {
  return (
    <div className='Shop_card'>
             <NavLink to={"/"}>Home /</NavLink>
      <span> <NavLink to={"shop"}>Shop </NavLink></span>
      <span> <NavLink to={"shop"}>Shopping Cart </NavLink></span>
     
    <div className="cart">
        <div className="market">
            <div className="cart_title">
                    <ul>
                        <li>Products</li>
                        <li>Price</li>
                        <li>Quantity</li>
                        <li>Total</li>
                    </ul>
                    <hr />
            </div>
            <div className="cart_boxes">
                <div className="box_c">
                    <img src="./Images/box1.png" alt="" />
                </div>
            </div>

        </div>
        <div className="total"></div>
    </div>

    </div>
  )
}

export default Shop_card