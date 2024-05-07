import React from 'react'
import "./Shoppage.scss"
import Shopping_page from '../../Components/Shop components/Shop_comp/Shopping_page'
import Shop_slider from '../../Components/Shop components/Shop_slider/Shop_slider'
import Description from '../../Components/Shop components/Description/Description'

const Shop = () => {
  return (
    <div>
    <Shopping_page/>
    <Shop_slider/> 
    <Description/>

    </div>
  )
}

export default Shop