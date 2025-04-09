import React, { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaDiscord, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
    
        const [currentTime, setCurrentTime] = useState(new Date());
        const [sendMailButton, setSendMailButton] = useState(false);
        const [formData, setFormData] = useState({
            name: "",
            email: "",
            message: ""
        });
        const [darkMode, setDarkMode] = useState(
            window.matchMedia("(prefers-color-scheme: dark)").matches);
    
        const toggleTheme = () => {
          setDarkMode(prevMode => !prevMode);
        };
      
        useEffect(() => {
          document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
        }, [darkMode]);
      
        const sendMail = (e) => {
            console.log("Sending mail...");
        }
    
        
    
        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentTime(new Date());
            }, 1000);
    
            return () => clearInterval(interval);
        }, []);
    return (
        
        <div id ="contact" className="footer">
        <div className="footer-container">
            <div className="contact-info">
                <h2>Contact Information</h2>
                <p>
                    Feel free to reach out through any of the following channels. We always open to discussing new projects,
                    team collaborations, or opportunities to be a part of your vision.
                </p>
                <ul>
                    <li>
                        <strong>Email:</strong> dscigdtuw@gmail.com
                    </li>
                </ul>
    
                <div className="social">
                    <a href="https://www.linkedin.com/company/dscigdtuw/mycompany/"><FaLinkedin className="icon"/></a>
                    <a href="https://twitter.com/gdsc_igdtuw"><FaTwitter  className="icon"/></a>
                    <a href="https://www.facebook.com/GDSCIGDTUW/"><FaFacebook  className="icon"/></a>
                    <a href="https://www.instagram.com/gdsc_igdtuw"><FaInstagram  className="icon"/></a>
                    <a href="https://www.youtube.com/@DSCIGDTUW"><FaYoutube  className="icon"/></a>
                    <a href="https://discord.gg/eG4YP3gA48" className="icon"> <FaDiscord />  </a>
                    <a href="https://chat.whatsapp.com/KIlPsKeZZdo7KhKtilL8AT" className="icon"> <FaWhatsapp /> </a>
                </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
                <h2>Send Me a Message</h2>
                <form onSubmit={sendMail} >
                    <input type="text" placeholder="Your Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                    <input type="email" placeholder="Your Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <textarea placeholder="Hello, I’d like to talk about..." required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                    <button type="submit"  disabled = {sendMailButton}>{ sendMailButton ? "processing" : "Send Message"}</button>
                </form>
                <div className="time_switch">
                    <p className="time">
                        {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
                    </p>
                    <label className="switch">
                        <input 
                            type="checkbox" 
                            checked={!darkMode}
                            onChange={toggleTheme}
                        />
                        <span className="slider"></span>
                    </label>
                </div>
            </div>
        </div>
      </div>
    );
}