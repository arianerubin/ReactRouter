import React, { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components./Blue";
import Red from "./components./Red";
import Home from "./components./Home";
import SignUpSignIn from "./components./SignUpSignIn";

function App() {
  return (
    <div id="container">
      <div id="navbar">
        <Link to="/blue">Blue</Link>
        <Link to="/red">Red</Link>
        <Link to="/">Home</Link>
        <Link to="/SignUpForm">Sign Up</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
          <Route path="/SignUpForm" element={<SignUpSignIn />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
