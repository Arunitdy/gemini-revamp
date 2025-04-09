import {useState, useEffect} from "react"
import {Header} from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Home } from "./Home/Home";
import { FaqSection } from "./FaqSection/FaqSection";
import { Sponser } from "./Sponsers/Sponsers";
import { StatsCounter } from "./StatsCounter/StatsCounter";
import { Prize } from "./Prizes/Prizes";
import { Tracks }  from "./Tracks/Tracks";
import { Timeline } from "./TimeLine/TimeLine"

import "./Profile.css";
import "../index.css";


export const Profile = () => {
    return (<>

        <div className="profile">
            <Header/>
            <Home/>
            <StatsCounter/>
            <Timeline/>
            <Tracks/>
            <Prize/>
            <Sponser/>
            <FaqSection/>
            <Footer/>
        </div>
    </>);
}