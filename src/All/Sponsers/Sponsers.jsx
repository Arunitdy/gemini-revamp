import React from "react";
import "./Sponsers.css";

import codecrafters from "../../img/SponsersImg/codecrafters-removebg-preview.png"
import Unstop from "../../img/SponsersImg/unstop.jpg"
import geekroom from "../../img/SponsersImg/geekroom-removebg-preview.png"
import RACIGDTUW from "../../img/SponsersImg/rcigdtuw-removebg-preview.png"
import sprintindia from "../../img/SponsersImg/sprint-removebg-preview.png"
import Geekroom from "../../img/SponsersImg/Geekroom-removebg-preview.png"

const Sponsers = [
  { name: "codecrafters", logo: codecrafters, website: "https://codecrafters.io/" },
  { name: "Unstop", logo: Unstop, website: "https://unstop.com/" },
  { name: "geekroom", logo: geekroom, website: "https://www.geekroom.in/" },
  { name: "RACIGDTUW", logo: RACIGDTUW, website: "https://sites.google.com/view/rcigdtuw/home" },
  { name: "sprintindia", logo: sprintindia, website: "https://www.sprintindia.work/about-us/" },
  { name: "Geekroom", logo: Geekroom, website: " https://git-scm.com/ "},
];

export const Sponser = () => {
    return (
      <div className="Sponsers-bar-container">
        <h2 className="faq-title ">Sponsers</h2>
        <div className="Sponsers-bar">
          {/* Seamless looping by duplicating elements */}
          <div className="scrolling-logos">
            {[...Sponsers, ...Sponsers].map((Sponsers, index) => (
              <a key={index} href={Sponsers.website} target="_blank" rel="noreferrer">
                <div className="Sponsers-logo">
                  <img src={Sponsers.logo} alt={Sponsers.name} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
};