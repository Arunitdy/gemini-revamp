import React, { useEffect, useRef } from 'react';
import './TimeLine.css';

export const Timeline = () => {
  const events = [
    {
      date: "April 4th, 2025",
      title: "Opening Ceremony & Registration",
      description: "Submission for all Mini Events and the Registration for the Hackathon Starts",
      icon: "🎉"
    },
    {
      date: "April 8th, 2025",
      title: "Hacking Period Starts!",
      description: "Get ready to code, create, and innovate!",
      icon: "💻"
    },
    {
      date: "April 12th, 2025",
      title: "Hacking Period Ends",
      description: "Make sure to wrap up your projects and prepare for submission.",
      icon: "🏁"
    },
    {
      date: "April 13th, 2025",
      title: "Mentorship Round Starts",
      description: "Providing mentorship and feedback for every submitted project",
      icon: "👨‍🏫"
    },
    {
      date: "April 15th, 2025",
      title: "Final Pitching & Closing Ceremony",
      description: "Don't miss out on this memorable event!",
      icon: "🏆"
    }
  ];

  const timelineRef = useRef(null);

  useEffect(() => {
    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      timelineItems.forEach((item, index) => {
        // Set data-index for numbering (if needed)
        item.setAttribute('data-index', index + 1);
        
        // Add a small staggered delay for a nice effect
        setTimeout(() => {
          item.classList.add('visible');
        }, index * 150);
      });
    }
    
    // Add window resize event listener for responsive adjustments
    const handleResize = () => {
      // You could add specific logic here if needed
      // For this case, CSS media queries handle most of the responsiveness
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Event Timeline</h2>
      <div className="timeline" ref={timelineRef}>
        {events.map((event, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <span className="timeline-icon-wrapper">
                <span className="timeline-icon">{event.icon}</span>
              </span>
              <div className="timeline-date">{event.date}</div>
              <h3 className="timeline-event-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
              <div className="timeline-dot"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};