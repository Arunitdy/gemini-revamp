import React from "react";
import "./About.css";
import image from "../../img/header.png"; // Ensure your image is in `src` or adjust the path


export const About = () => {
  return (
    <section className="about-section">
      <h1 className="heading">About Devcation '25</h1>

      <div className="about-grid">
        <div className="about-image">
          <img src={image} alt="Women in tech" />
        </div>
        <div className="about-text">
          <div className="text-box">
            <p>
              Devcation is a week-long technical festival organized by Google Developer Groups - Indira Gandhi Delhi Technical University for Women that celebrates diversity in the TechForGood Domain. During the week, we have the Devcation`25 hackathon. These events are designed to spark your creativity, encourage innovative thinking, and help you craft tech solutions that stand out.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

