import React from "react";
import "./App.scss";
import Home from "../Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Home components/Footer/Footer";
import Shopping_page from "../Pages/Shop/Shopping_page";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shop" element={<Shopping_page />} />
      </Routes> 
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
