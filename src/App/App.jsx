import React from "react";
import "./App.scss";
import Home from "../Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Home components/Footer/Footer";
import Shop from "../Pages/Shop/Shoppage";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shop/>} />
      </Routes> 
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
