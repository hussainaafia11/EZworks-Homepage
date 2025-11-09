import React from "react";

function HeroSection() {
    return (
        <section id="home" className="hero">
            <div className="hero-content">
                <h1>Welcome to <span>EZ Works</span></h1>
                <div className="about-image">
                    <img
                        src="ez_works.png"
                        alt="About"
                        style={{
                            width: "400px",
                            height: "150px",
                            
                        }}
                    />
                </div>
                <p>Innovating technology with precision, creativity, and efficiency.</p>
                <a href="#contact" className="btn">Contact Us</a>
            </div>
            
        </section>

    );
    
}

export default HeroSection;
