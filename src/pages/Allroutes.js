import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarTop from "../components/Navbar";
import NavbarDown from "../components/NavbarDown";
import AppOnly from "./AppOnly";
import Cart from "./Cart";
import Home from "./Home";
import NewArrivals from "./NewArrivals";
import Products from "./Products";
import Superdeal from "./Superdeals";
import Login from "./Login";
const Allroutes = () => {
  return (
    <>
      <NavbarTop />
      <NavbarDown/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/superdeal" element={<Superdeal/>}/>
        <Route path="/apponly" element={<AppOnly/>}/>
        <Route path="/newarrivals" element={<NewArrivals/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/products/:product_id" element={<Products/>}/>
        <Route path="/login" element={<Login/>}/>
       </Routes>
    </>
  );
};

export default Allroutes;
