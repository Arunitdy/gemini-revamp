import googleSolution from "../../img/googleSolution.png";

import "./Header.css";

export const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={googleSolution} alt="Logo" className="logo_img" />
                <p1 className="logo-text">Google Developer Groups on Campus</p1>
                <p2 className="logo-text">Indira Gandhi Delhi Technical University for Women</p2>
            </div>

            <div className="menu">
                <a href="#home"><button className="menu_ele">Home</button></a>
                <a href="#about"><button className="menu_ele">About</button></a>
                <a href="#skills"><button className="menu_ele">Devcation`25</button></a>
                <a href="#projects"><button className="menu_ele">Timeline</button></a>
                <a href="#projects"><button className="menu_ele">Events</button></a>
                <a href="#projects"><button className="menu_ele">More</button></a>
                <a href="#contact"><button className="menu_ele">Contact</button></a>
            </div>
        </div>
    );
}