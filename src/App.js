import React from "react";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./components/Home";

function App() {
  return (
    <>
     
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
