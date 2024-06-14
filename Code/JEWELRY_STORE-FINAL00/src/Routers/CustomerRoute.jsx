import React from "react";
import { Navbar } from "../component/Navbar/Navbar";
import { Link, Route, Routes } from "react-router-dom";
import Home from "../component/Home/Home";
import JewelryDetail from "../component/Jewelry/JewelryDetail";
import Cart from "../component/Cart/Cart";
import Profile from "../component/Profile/Profile";
import { Auth } from "../component/Auth/Auth";
import LoginForm from "../component/Auth/LoginForm";
import RegisterForm from "../component/Auth/RegisterForm";
export default function CustomerRoute() {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/cart"}>cart</Link>
        </li>

        <li>
          <Link to={"/login"}>login</Link>
        </li>
        <li>
          <Link to={"/register"}>register</Link>
        </li>
      </ul>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />}/>
        <Route path="/jewelry/:city/:title/:id" element={<JewelryDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-profile/*" element={<Profile />} />
      </Routes>
    </div>
  );
}
