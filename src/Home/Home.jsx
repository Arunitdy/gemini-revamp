import React from 'react';
import './Home.css';

export const Home = () => {
    return (
        <main className="container">
            <h1 className="title">Welcome to Devcation '25</h1>
            <button className="register-button">Register Now</button>
            <div className="social-links">
                <a href="#"><img src="/x.png" alt="X" className="icon" /></a>
                <a href="#"><img src="/fb.png" alt="Facebook" className="icon" /></a>
                <a href="#"><img src="/linkedin.png" alt="LinkedIn" className="icon" /></a>
                <a href="#"><img src="/insta.png" alt="Instagram" className="icon" /></a>
                <a href="#"><img src="/youtube.png" alt="YouTube" className="icon" /></a>
            </div>
            <img src="/devcation-graphic.png" alt="Devcation Graphic" className="graphic" />
        </main>
    );
};
