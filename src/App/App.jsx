import React from "react";
import "./App.scss";
import Home from "../Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Home components/Footer/Footer";
import Shop from "../Pages/Shop/Shoppage";
import Shoppingcart from "../Pages/Shoppingcart/Shoppingcart";
import Search from "../Pages/Search/Search";
import Login from "../Pages/Media login/Login";
import Register from "../Pages/Media Register/Register";
import { Like } from "../Pages/Like/Like";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/shopcart" element={<Shoppingcart/>} />
        <Route path="/search" element={<Search/>} /> 
        <Route path="/login" element={<Login/>} /> 
        <Route path="/register" element={<Register/>} /> 
        <Route path="/like" element={<Like/>} /> 
        



      </Routes> 
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
