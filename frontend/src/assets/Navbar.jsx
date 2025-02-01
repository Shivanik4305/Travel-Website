import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import logo from './logo.jpg';
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className="navbar">
                <img src={logo} alt="Logo" className="logo" />
                
                {/* Hamburger Icon */}
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Navigation Links */}
                <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Destination">Destinations</Link></li>
                    <li><Link to="/BookNow">Book Now</Link></li>
                    <li><Link to="/Aboutus">About</Link></li>
                    <li><Link to="/Contactus">Contact Us</Link></li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
