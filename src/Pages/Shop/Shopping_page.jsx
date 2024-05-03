import React from 'react'

const Shopping_page = () => {
  return (
    <div className='shop_page'>
      <div className="shop_title">
        <ul>
          <li><p>Home /</p></li>
          <li><p>Shop</p></li>

        </ul>
      </div> 
      <div className="box">
        <div className="box_image">
          <div className="mini_boxes">
            <div className="box">
              <img src="public/Images/mini1.png" alt="" />
            </div>
            <div className="box">
              <img src="public/Images/mini2.png" alt="" />
            </div> 
            <div className="box">
              <img src="public/Images/mini1.png" alt="" />
            </div> 
            <div className="box">
              <img src="public/Images/mini2.png" alt="" />
            </div> 
          </div> 
          <div className="max_box">
            <img src="public/Images/max.png" alt="" />
          </div>
        </div>
        <div className="box_text">
          <h1>Barberton Daisy</h1>
          <div className="sum">
            <h2>$119.00</h2>
            <p>19 Customer Review</p>
          </div>
          <div className="text">
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
        </div>
      </div>

    </div>
  )
}

export default Shopping_page