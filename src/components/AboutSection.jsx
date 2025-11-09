import React from "react";

function AboutSection() {
    return (
        <section id="about" className="about">
            
            <div className="about-content" style={{ maxWidth: "800px", margin: "0 auto" }}>
                <h2 style={{ fontSize: "2rem", marginBottom: "20px", color: "#333" }}>
                    About EZ Works
                </h2>
                <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555" }}>
                    EZ Works is a leading digital solutions provider focused on simplifying technology
                    for businesses. We help brands enhance their online presence through cutting-edge
                    web applications, creative design, and seamless integrations. Our goal is to make
                    digital transformation effortless — delivering intuitive, fast, and user-friendly
                    experiences that empower organizations to grow efficiently. At EZ Works, we create innovative web and AI solutions that
                    redefine the digital experience. Our mission is to make
                    technology smarter, faster, and more accessible.
                    EZ is the services factory of the world, transforming service delivery by combining the power of AI and human expertise. With 15 capabilities across 5 service lines and 70+ offerings, EZ is transforming traditional industries - driving speed, precision, and scalability through technology-led innovation and applied AI.
                </p>

            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#555", marginTop: "15px" }}>
                With a customer-first approach and a passion for innovation, EZ Works combines
                technology and creativity to build scalable solutions. Whether it's modern web
                apps, responsive interfaces, or automation workflows — we bring ideas to life
                with precision, performance, and purpose.
            </p>

            <button
                style={{
                    marginTop: "30px",
                    padding: "12px 28px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "1rem"
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
                Learn More
            </button>
        </div>
    </section >
  );
}

export default AboutSection;
