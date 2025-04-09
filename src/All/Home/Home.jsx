
import {FaLinkedin, FaGithub, FaFacebook, FaInstagram} from "react-icons/fa";
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
            <div className="Hello">Hello, my name is</div>
            <h1>Arun M</h1>
            <h2>Frontend Developer</h2>
            <div className="Home_about">
                <p>I am a Frontend Developer with experience in building websites and web applications. I specialize in JavaScript and have professional experience working with React. I also have experience working with Node.js, Express.js, and MongoDB. I am passionate about learning new technologies and building products that solve real-world problems.</p>
            </div>
            <div className="view_conect">
                <a href="#projects"><button className="view">View My Work</button></a>
                <a href=                 "https://www.linkedin.com/in/arun-m-8989212aa/"><button className="connect">Connect Me</button></a>
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/arun-m-8989212aa/"><FaLinkedin className="icon"/></a>
                <a href="https://github.com/Arunitdy"><FaGithub  className="icon"/></a>
                <a href="https://www.facebook.com/arun.mundakkal.94"><FaFacebook  className="icon"/></a>
                <a href="https://www.instagram.com/arun_mundakkal/"><FaInstagram  className="icon"/></a>
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