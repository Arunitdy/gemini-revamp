import {useState, useEffect} from "react"
import {Header} from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Home } from "./Home/Home";
import { FaqSection } from "./FaqSection/FaqSection";
import { Sponser } from "./Sponsers/Sponsers";

import "./Profile.css";
import "../index.css";


export const Profile = () => {
    return (<>

        <div className="profile">
            <Header/>
            <Home/>
            <div id= "about" className="About">
                <h1>About <span>Me</span></h1>
                <p className="text-center ">
                    My journey in programming has been exciting! Here’s a quick look at my progress over the years:
                </p>
                <div className="About_content">
                    <div className="WhoIam">
                        <h2><span>Who</span> I am</h2>
                        <p>
                            I am a passionate web developer specializing in <span>React, JavaScript</span>, and backend technologies.
                            With experience in building full-stack applications, I enjoy solving problems, optimizing 
                            performance, and creating user-friendly interfaces.
                        </p>
                    </div>
                </div>
                <Sponser/>
                <FaqSection/>
                <Footer/>

            </div>
        </div>
    </>);
}