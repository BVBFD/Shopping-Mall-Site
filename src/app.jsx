import React from "react";
import Home from "./components/homePart/home";
import { Route, Routes } from "react-router-dom";
import About from "./components/aboutPart/about";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Products from "./components/products/products";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact={true} path={"/"} element={<Home />} />
        <Route exact={true} path={"/about"} element={<About />} />
        <Route exact={true} path={"/products"} element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
