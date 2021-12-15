import React from "react";
import Home from "./components/homePart/home";
import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact={true} path={"/"} element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
