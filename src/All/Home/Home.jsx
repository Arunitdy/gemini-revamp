
import {FaLinkedin, FaGithub, FaFacebook,FaTwitter, FaInstagram, FaYoutube} from "react-icons/fa";
import mainImg from "../../img/hero1.jpeg";
import "./Home.css";

export const Home = () => {
    return (
        <div id ="home" className="Home">
        <div className="Home_right right">
            <div  className="Profile_wrapper">
                <img className = "Profile_img" src={mainImg} alt="profile img" />
            </div>
        </div>
        <div className = "Home_left">
            <h2>Welcome to</h2>
            <h1>Devcation`25</h1>
            <div className="view_conect">
                <a href="https://unstop.com/college-fests/devcation25-gdg-on-campus-igdtuw-indira-gandhi-delhi-technical-university-for-women-igdtuw-delhi-368807"><button className="view">Registre Now</button></a>
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/company/dscigdtuw/mycompany/"><FaLinkedin className="icon"/></a>
                <a href="https://twitter.com/gdsc_igdtuw"><FaTwitter  className="icon"/></a>
                <a href="https://www.facebook.com/GDSCIGDTUW/"><FaFacebook  className="icon"/></a>
                <a href="https://www.instagram.com/gdsc_igdtuw"><FaInstagram  className="icon"/></a>
                <a href="https://www.youtube.com/@DSCIGDTUW"><FaYoutube  className="icon"/></a>
            </div>
        </div>
        <div className="Home_right tempright">
            <div  className="Profile_wrapper">
                <img className = "Profile_img" src={mainImg} alt="profile img" />
            </div>
        </div>
    </div>
        
    )
}