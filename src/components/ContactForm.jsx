import React, { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone || !formData.message) {
            setStatus("⚠️ Please fill in all fields.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus("⚠️ Invalid email address.");
            return;
        }

        try {
            
               const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
                 method: "POST",
                 headers: { "Content-Type": "application/json" },
                 body: JSON.stringify(formData),
              });

            if (response.ok) {
                setStatus("Form Submitted Successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus("Submission failed. Try again.");
            }
        } catch (error) {
            setStatus("Network error. Please try again later.");
        }
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit} className="contact-form">
                {status && <p className="status">{status}</p>}

                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                />

                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <button type="submit" className="btn">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;
