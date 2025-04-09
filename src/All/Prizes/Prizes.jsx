import React from "react";
import "./Prizes.css"; 

// Import images correctly
import FDMS from "../../img/prize.png";
import Portfolio from"../../img/prize.png"; 
import Activity from"../../img/prize.png"; 
import Smart from"../../img/prize.png";
import Soul from"../../img/prize.png"; 

// Prizes Data
const Prizes = [
  {
    title: "Food Care",
    gui: FDMS,
    description: "A food donation and distribution management system.",
    techStack: ["React", "Spring Boot", "MySQL"],
    liveLink: "",
    githubLink: "https://github.com/Arunitdy/Food-Donation-and-Distribution-Management-System",
  },
  {
    title: "Portfolio 2.0",
    gui: Portfolio,
    description: "A modern developer portfolio built with React and Vite.",
    techStack: ["React", "Vite", "Docker"],
    liveLink: "https://portfolio-2-0-wyqk.vercel.app/",
    githubLink: "https://github.com/Arunitdy/portfolio-2.0",
  },
  {
    title: "Activity Points System",
    gui: Activity,
    description: "A system to track student activity points with  fire store.",
    techStack: ["React", "Firebase"],
    liveLink: "https://activity-points.vercel.app/",
    githubLink: "https://github.com/1518manu/ActivityPoints.git",
  },
  {
    title: "Smart-Energy-Meter",
    gui: Smart,
    description: "A smart energy meter using Blynk cloud.",
    techStack: ["React", "Blynk Cloud"],
    liveLink: "https://smart-energy-meter-three.vercel.app/",
    githubLink: "https://github.com/Arunitdy/Smart-Energy-Meter",
  },
  {
    title: "Soul",
    gui: Soul,
    description: "Soul is an interactive web experience that blends love, romance, and technology through stunning visuals, animations, and heartfelt interactions, making it perfect for digital love letters or creative proposals. ",
    techStack: ["HTML", "CSS", "JavaScript", "emailJs.Api"],
    liveLink: "https://soul-xi.vercel.app/",
    githubLink: "https://github.com/Arunitdy/Soul-",
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