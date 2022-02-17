import React from "react";
import Home from "./components/homePart/home.jsx";
import { Route, Routes } from "react-router-dom";
import About from "./components/aboutPart/about.jsx";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Products from "./components/products/products.jsx";
import Contact from "./components/contact/contact.jsx";
import Login from "./components/login/login.jsx";
import Register from "./components/register/register.jsx";
import Cart from "./components/cart/cart.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact={true} path={"/"} element={<Home />} />
        <Route exact={true} path={"/about"} element={<About />} />
        <Route exact={true} path={"/products"} element={<Products />} />
        <Route exact={true} path={"/contact"} element={<Contact />} />
        <Route exact={true} path={"/login"} element={<Login />} />
        <Route exact={true} path={"/register"} element={<Register />} />
        <Route exact={true} path={"/cart"} element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
