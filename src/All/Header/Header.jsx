import { useState } from 'react';
import googleSolution from "../../img/googleSolution.png";
import "./Header.css";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (<>
            <div className="header">
            <div className="logo">
                <img src={googleSolution} alt="Logo" className="logo_img" />
                <p1 className="logo-text">Google Developer Groups on Campus</p1>
                <p2 className="logo-text">Indira Gandhi Delhi Technical University for Women</p2>
            </div>
            
            <button className={`menu-toggle ` }onClick={toggleMenu}>
                 {!isMenuOpen? "☰ ":""}
            </button>
            <div className={`menu `}>
                <a href="#home"><button className="menu_ele">Home</button></a>
                <a href="#about"><button className="menu_ele">About</button></a>
                <a href="#skills"><button className="menu_ele">Devcation`25</button></a>
                <a href="#projects"><button className="menu_ele">Timeline</button></a>
                <a href="#projects"><button className="menu_ele">Events</button></a>
                <a href="#projects"><button className="menu_ele">Tracks</button></a>
                <a href="#projects"><button className="menu_ele">Prizes</button></a>
                <a href="#projects"><button className="menu_ele">Sponsors</button></a>
                <a href="#contact"><button className="menu_ele">Contact</button></a>
            </div>
            </div>
            
            <div className={`side-menu ${isMenuOpen ? "side-menu-active" : ""}`}>


            <div className={`menu1 ${isMenuOpen? "active ":""}`}>
                   
                    <button  className='close-btn'onClick={toggleMenu}>
                        ✕
                    </button>
             
                <a href="#home"><button className="menu_ele">Home</button></a>
                <a href="#about"><button className="menu_ele">About</button></a>
                <a href="#skills"><button className="menu_ele">Devcation`25</button></a>
                <a href="#projects"><button className="menu_ele">Timeline</button></a>
                <a href="#projects"><button className="menu_ele">Events</button></a>
                <a href="#projects"><button className="menu_ele">Tracks</button></a>
                <a href="#projects"><button className="menu_ele">Prizes</button></a>
                <a href="#projects"><button className="menu_ele">Sponsors</button></a>
                <a href="#contact"><button className="menu_ele">Contact</button></a>
            </div>
        </div> 
   </>
  );
}