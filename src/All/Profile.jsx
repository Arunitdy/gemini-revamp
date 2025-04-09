import { useState } from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Home } from "./Home/Home";
import { FaqSection } from "./FaqSection/FaqSection";
import { Sponser } from "./Sponsers/Sponsers";
import { StatsCounter } from "./StatsCounter/StatsCounter";
import { Prize } from "./Prizes/Prizes";
import { Tracks } from "./Tracks/Tracks";
import { Timeline } from "./TimeLine/TimeLine";
import { About } from "./About/About";
import { Crew } from "./Crew/Crew";
import RandomBlocks from "./RandomBlocks/RandomBlocks";

import { FaWhatsapp, FaDiscord, FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Profile.css";
import "../index.css";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="profile">
      <Header />
      
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="stats">
        <StatsCounter />
      </div>

      <div id="timeline">
        <Timeline />
      </div>

      <div id="crew">
        <Crew />
      </div>

      <div id="tracks">
        <Tracks />
      </div>

      <div id="prizes">
        <Prize />
      </div>

      <div id="sponsors">
        <Sponser />
      </div>

      <div id="faq">
        <FaqSection />
      </div>

      <div id="contact">
        <Footer />
      </div>

      {/* Sliding Drawer Panel with built-in toggle */}
      <div className={`connectionsWD-slide ${isOpen ? "open" : ""}`}>
        {/* Toggle Button attached to drawer */}
        <div className="slide-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
        </div>

        {/* Icons inside the drawer */}
        <a href="https://discord.gg/eG4YP3gA48" className="Discord connectWD pulse">
          <FaDiscord />
        </a>
        <a href="https://chat.whatsapp.com/KIlPsKeZZdo7KhKtilL8AT" className="WhatsApp connectWD pulse">
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};
