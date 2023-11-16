import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <>
        <div className="nav_bar container">
            <div>FizaTechnical</div>
            <div>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/services'>Services</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
            </div>
        </div>
        </>
    )
}

export default Navbar;