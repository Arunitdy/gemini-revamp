import React from "react";
import "./Prizes.css"; 

// Import images correctly
import prize from "../../img/prize.png";

// Prizes Data
const Prizes = [
  {
    title: "Hack & Solve Winners",
    gui: FDMS,
    description: "Cash Prize with swag kits, medals, certificates, social media shoutouts, Interview Buddy Mock Interviews, Codecrafter Membership, Unstop Coupons.",
  },
  {
    title: "Mini Event Winners",
    gui: prize,
    description: "Goodies, certificates, social media shoutouts, unstop coupons.",
  },
  {
    title: "All Finalists",
    gui: prize,
    description: "Exciting goodies, certificates, unstop coupons",
  },
  {
    title: "All Participants",
    gui: prize,
    description: "Certificates and 50% unstop coupons and exclusive discount vouchers from IB for all.",
  },
];

export const Prize = () => {
  return (
    <section id="Prizes" className="Prizes-container">
      <h2 className="section-title">Prizes</h2>
      <div className="Prizes-wrapper">
        <div className="Prizes-scroll">
          {Prizes.map((Prize, index) => (
            <div key={index} className="Prize-card">
              <img src={Prize.gui} alt={Prize.title} className="Prize-image" />
              <h3>{Prize.title}</h3>
              <p>{Prize.description}</p>
              <div className="tech-stack">
                {Prize.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="Prize-links">
                {Prize.liveLink && (
                  <a href={Prize.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                <a href={Prize.githubLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};