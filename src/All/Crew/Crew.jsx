import "./Crew.css";


// Import images correctly
import FDMS from "../../img/person/Judges/aarnav.jpg";
import FDMS from "../../img/person/Judges/Kartik.jpeg";
import FDMS from "../../img/person/Judges/vani.jpeg";
import FDMS from "../../img/person/Mentors/Aditya.png";
import FDMS from "../../img/person/Mentors/Aishvi.png";
import FDMS from "../../img/person/Mentors/AkankshaJha_Mentor.jpg";
import FDMS from "../../img/person/Mentors/DhruvBakshi_Mentor.jpg";
import FDMS from "../../img/person/Mentors/PrathamBatra_Mentor.jpeg";
import FDMS from "../../img/person/Mentors/RadhikaBansal_Devcation.jpeg";
import FDMS from "../../img/person/Mentors/RudraPratapDash.jpg";
import FDMS from "../../img/person/Mentors/SanidhyaGoel.jpeg";
import FDMS from "../../img/person/Mentors/SuhaniNagpal_Mentor.jpeg";
import FDMS from "../../img/person/Mentors/TanmayArora.jpg";
import FDMS from "../../img/person/Mentors/TeekshaHarish_Mentor.jpeg";
import FDMS from "../../img/person/Mentors/TejaswiTyagi_Mentor.jpg";
import FDMS from "../../img/person/Mentors/VikranthUdandarao_Mentor.jpg";

// Crews Data
const Crews = [
  {
    name: "Food Care",
    gui: FDMS,
    LinkedIn: "https://github.com/Arunitdy/Food-Donation-and-Distribution-Management-System",
  },
  {
    name: "Portfolio 2.0",
    gui: Portfolio,
    LinkedIn: "https://github.com/Arunitdy/portfolio-2.0",
  },
  {
    name: "Activity Points System",
    gui: Activity,
    LinkedIn: "https://github.com/1518manu/ActivityPoints.git",
  },
  {
    name: "Smart-Energy-Meter",
    gui: Smart,
    LinkedIn: "https://github.com/Arunitdy/Smart-Energy-Meter",
  },
  {
    name: "Soul",
    gui: Soul,
    LinkedIn: "https://github.com/Arunitdy/Soul-",
  },
];

export const Crew = ()=> {

    return (
        
    <section id="Crews" className="Crews-container">
      <h2 className="section-name">Crews</h2>
      <div className="Crews-wrapper">
        <div className="Crews-scroll">
          {Crews.map((Crew, index) => (
            <div key={index} className="Crew-card">
              <img src={Crew.gui} alt={Crew.name} className="Crew-image" />
              <h3>{Crew.name}</h3>
              <div className="Crew-links">
                <a href={Crew.LinkedIn} target="_blank" rel="noopener noreferrer">
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