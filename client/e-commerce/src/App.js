import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import Admin from "./admin/Admin";
import SingleProduct from "./pages/single/SingleProduct";
import AllP from "./pages/allP/AllP";
import AllB from "./pages/allB/AllB";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/allproduct/:id" element={<AllP />} />
        <Route path="/blogproduct/:id" element={<AllB />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
};

export default App;
