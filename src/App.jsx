import React, { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Policy from "./Pages/Policy/Policy";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/PrivacyPolicy" exact={true} element={<Policy />} />
        </Routes>
        <div className="container">
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
