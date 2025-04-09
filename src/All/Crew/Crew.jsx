import "./Crew.css";


// Import images correctly
import FDMS from "../../img/person/Judges/";
import FDMS from "../../img/person/Judges/";
import FDMS from "../../img/person/Judges/";
import FDMS from "../../img/person/Mentors/";
import FDMS from "../../img/person/Mentors/";
import FDMS from "../../img/person/Mentors/";
import FDMS from "../../img/person/Mentors/";
import FDMS from "../../img/person/Mentors/";
import FDMS from "../../img/person/Mentors/";
import FDMS from "../../img/person/Mentors/";
import FDMS from "../../img/person/Mentors/";
import FDMS from "../../img/person/Mentors/";

// Crews Data
const Crews = [
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

export const Crew = ()=> {

    return (
        
    <section id="Crews" className="Crews-container">
      <h2 className="section-title">Crews</h2>
      <div className="Crews-wrapper">
        <div className="Crews-scroll">
          {Crews.map((Crew, index) => (
            <div key={index} className="Crew-card">
              <img src={Crew.gui} alt={Crew.title} className="Crew-image" />
              <h3>{Crew.title}</h3>
              <p>{Crew.description}</p>
              <div className="tech-stack">
                {Crew.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="Crew-links">
                {Crew.liveLink && (
                  <a href={Crew.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                <a href={Crew.githubLink} target="_blank" rel="noopener noreferrer">
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