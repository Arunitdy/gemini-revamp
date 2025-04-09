import React from 'react';
import './header.css';
export const Header = () => {
    return (
        <header className="header-container">
            <div className="header-left">
                <img src="/logo.png" alt="Logo" className="header-logo" />
                <span className="header-title">Google Developer Groups On Campus</span>
            </div>
            <nav className="header-nav">
                <a href="#" className="header-link">Home</a>
                <a href="#" className="header-link">About</a>
                <a href="#" className="header-link">Devcation '25</a>
                <a href="#" className="header-link">Timeline</a>
                <a href="#" className="header-link">Events</a>
                <a href="#" className="header-link">More ▼</a>
                <a href="#" className="header-link">Contact</a>
                <a href="#" className="header-discord"><img src="/discord.png" alt="Discord" className="discord-logo" /></a>
            </nav>
        </header>
    );
};
