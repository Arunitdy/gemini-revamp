import React, { useEffect, useRef, useState } from "react";
import "./Crew.css";

// Judges
import Aarnav from "../../img/person/Judges/aarnav.jpg";
import Kartik from "../../img/person/Judges/Kartik.jpeg";
import Vani from "../../img/person/Judges/vani.jpeg";

// Mentors
import Aditya from "../../img/person/Mentors/Aditya.png";
import Aishvi from "../../img/person/Mentors/Aishvi.png";
import Akanksha from "../../img/person/Mentors/AkankshaJha_Mentor.jpg";
import Dhruv from "../../img/person/Mentors/DhruvBakshi_Mentor.jpg";
import Pratham from "../../img/person/Mentors/PrathamBatra_Mentor.jpeg";
import Radhika from "../../img/person/Mentors/RadhikaBansal_Devcation.jpeg";
import Rudra from "../../img/person/Mentors/RudraPratapDash.jpg";
import Sanidhya from "../../img/person/Mentors/SanidhyaGoel.jpeg";
import Suhani from "../../img/person/Mentors/SuhaniNagpal_Mentor.jpeg";
import Tanmay from "../../img/person/Mentors/TanmayArora.jpg";
import Teeksha from "../../img/person/Mentors/TeekshaHarish_Mentor.jpeg";
import Tejaswi from "../../img/person/Mentors/TejaswiTyagi_Mentor.jpg";
import Vikranth from "../../img/person/Mentors/VikranthUdandarao_Mentor.jpg";

// Crews Data
const Judges = [
  {
    name: "Kartik Mathur",
    img: Kartik,
    linkedin: "https://www.linkedin.com/in/kartik-mathur/",
  },
  {
    name: "Vani Chitkara",
    img: Vani,
    linkedin: "https://www.linkedin.com/in/vani-chitkara/",
  },
  {
    name: "Aarnav Jindal",
    img: Aarnav,
    linkedin: "https://www.linkedin.com/in/aarnavjindal/",
  },
];

const Mentors = [
  {
    name: "Aditya Girdhar",
    img: Aditya,
    linkedin: "https://www.linkedin.com/in/adityagirdhar",
  },
  {
    name: "Aishvi Guleria",
    img: Aishvi,
    linkedin: "https://www.linkedin.com/in/aishvi-guleria-09a04222b",
  },
  {
    name: "Akanksha Jha",
    img: Akanksha,
    linkedin: "https://www.linkedin.com/in/akanksha-jha-8609a422a",
  },
  {
    name: "Dhruv Bakshi",
    img: Dhruv,
    linkedin: "https://www.linkedin.com/in/dhruvbakshiwork",
  },
  {
    name: "Pratham Batra",
    img: Pratham,
    linkedin: "https://www.linkedin.com/in/pratham1908/",
  },
  {
    name: "Radhika Bansal",
    img: Radhika,
    linkedin: "https://www.linkedin.com/in/radhika403/",
  },
  {
    name: "Rudra Pratap Dash",
    img: Rudra,
    linkedin: "https://www.linkedin.com/in/rudra-pratap-dash-b2ab16267/",
  },
  {
    name: "Sanidhya Goel",
    img: Sanidhya,
    linkedin: "https://www.linkedin.com/in/sanidhyagoel18/",
  },
  {
    name: "Suhani Nagpal",
    img: Suhani,
    linkedin: "https://www.linkedin.com/in/suhani-nagpal072/",
  },
  {
    name: "Tanmay Arora",
    img: Tanmay,
    linkedin: "https://www.linkedin.com/in/tanmaycode1/",
  },
  {
    name: "Teeksha Harish",
    img: Teeksha,
    linkedin: "https://www.linkedin.com/in/teeksha-harish-5895a0234/",
  },
  {
    name: "Tejaswi Tyagi",
    img: Tejaswi,
    linkedin: "https://www.linkedin.com/in/tejaswi-tyagi/",
  },
  {
    name: "Vikranth Udandarao",
    img: Vikranth,
    linkedin: "https://www.linkedin.com/in/vikranth-udandarao/",
  },
];

export const Crew = () => {
  const judgesRef = useRef(null);
  const mentorsRef = useRef(null);

  // Optional: dot state
  const [mentorIndex, setMentorIndex] = useState(0);
  const [judgeIndex, setJudgeIndex] = useState(0);

  const autoScroll = (ref, itemsLength, indexSetter) => {
    const container = ref.current;
    if (!container) return;

    const cardWidth = container.children[0]?.offsetWidth + 20; // 20 is the gap
    let index = 0;

    return setInterval(() => {
      index = (index + 1) % itemsLength;
      container.scrollTo({ left: index * cardWidth, behavior: "smooth" });
      indexSetter(index);
    }, 3000);
  };

  useEffect(() => {
    const mentorInterval = autoScroll(mentorsRef, Mentors.length, setMentorIndex);
    const judgeInterval = autoScroll(judgesRef, Judges.length, setJudgeIndex);

    return () => {
      clearInterval(mentorInterval);
      clearInterval(judgeInterval);
    };
  }, []);

  const renderDots = (length, currentIndex) => (
    <div className="Crews-dots">
      {Array.from({ length }).map((_, i) => (
        <span key={i} className={`dot ${i === currentIndex ? "active" : ""}`} />
      ))}
    </div>
  );

  const renderPeople = (title, list, ref, currentIndex) => (
    <div className="section">
      <h2 className="section-name">{title}</h2>
      <div className="Crews-wrapper">
        <div className="Crews-scroll" ref={ref}>
          {list.map((person, index) => (
            <div key={index} className="Crew-card">
              <img src={person.img} alt={person.name} className="Crew-image" />
              <h3>{person.name}</h3>
              <div className="Crew-links">
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {renderDots(list.length, currentIndex)}
    </div>
  );

  return (
    <section id="Crews" className="Crews-container">
      {renderPeople("Judges", Judges, judgesRef, judgeIndex)}
      {renderPeople("Mentors", Mentors, mentorsRef, mentorIndex)}
    </section>
  );
};
