// export default App
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ContactForm from "./components/ContactForm";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ContactForm />
      <footer className="footer">
        © 2025 EZ Works | All Rights Reserved
      </footer>
    </>
  );
}

export default App;
