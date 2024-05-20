import React from 'react'
import "./Cactus.scss"
import { GoArrowRight } from "react-icons/go";
const Cactus = () => {
  return (
    <div className='Cactus'>
        <div className="boxes">
            <div className="box">
                <div className="box_image">
                  

                    <img  className='cactus' src="./Images/cactus1.png" alt="" />
                </div>
                <div className="box_text">
                    <h2>SUMMER CACTUS & SUCCULENTS</h2>
                    <p>We are an online shop offering a wide range of  cheap and trendy plants</p>
                    <button>Find more<GoArrowRight /></button>
                </div>
            </div>
            <div className="box">
                <div className="box_image">
                

                    <img className='cactus' src="./Images/cactus2.png" alt="" />
                </div>
                <div className="box_text">
                    <h2>SUMMER CACTUS & SUCCULENTS</h2>
                    <p>We are an online shop offering a wide range of  cheap and trendy plants</p>
                    <button>Find more<GoArrowRight /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cactus