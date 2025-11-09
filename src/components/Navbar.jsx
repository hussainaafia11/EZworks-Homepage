import React from "react";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="about-image">
                    <img
                        src="ez_works 2.png"
                        alt="About"
                        style={{
                            width: "50px",
                            height: "50px",

                        }}
                    /><div className="logo">EZ Works</div>
                    
                </div>
               
                <div className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
