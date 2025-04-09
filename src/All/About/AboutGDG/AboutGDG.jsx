import React from "react";
import "./AboutGDG.css";
import image1 from "../../../img/person/collage-crew.jpg";

export const AboutGDG = () => {
  return (
    <section className="gdg-section">
      <h1 className="gdg-heading">About GDG IGDTUW</h1>

      <div className="gdg-container">
        <div className="gdg-text-box">
          <p>
            Here at GDG IGDTUW, we explore technology and use it to build
            products that bring about positive change in society. We conduct
            mentorship sessions, workshops, knowledge transfer sessions,
            hackathons, coding contests, open source programs, etc. where
            students from across the globe get to showcase their knowledge and
            develop their skillset.
          </p>
        </div>

        <div className="gdg-image-stack">
          <img src={image1} alt="event1" />
        </div>
      </div>

      <p className="gdg-bottom-note">
        We have helped more than 7000+ university students to expand their
        technical knowledge and skills.
      </p>
    </section>
  );
};
