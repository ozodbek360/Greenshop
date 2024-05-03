import React from 'react'
import Slider from '../../Components/Home components/Slider/Slider'
import Shop from '../../Components/Home components/Shop/Shop'
import Cactus from '../../Components/Home components/Cactus/Cactus'
import Blog from '../../Components/Home components/Blog/Blog'
import "./Home.scss"
const Home = () => {
  return (
    <div className='Container'>
        <Slider/>
       <Shop/> 
       <Cactus/>
       <Blog/> 
    </div>
  )
}

export default Home