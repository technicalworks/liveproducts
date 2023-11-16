import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Home";
import Services from "./Services";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Bootstrap = () => {
    return(
        <>
        <div className="main">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/services" element={<Services />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        </div>

        </>
    )
}

export default Bootstrap;