import React from 'react';
import './footer.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Devcation '25. All rights reserved.</p>
            <div className="footer-links">
                <a href="/privacy" className="footer-link">Privacy Policy</a>
                <a href="/terms" className="footer-link">Terms of Service</a>
            </div>
        </footer>
    );
};
