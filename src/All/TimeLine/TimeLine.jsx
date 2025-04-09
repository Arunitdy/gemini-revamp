import React from 'react';
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
      icon: "🔒"
    },
    {
      date: "April 12th, 2025",
      title: "Hacking Period Ends",
      description: "Make sure to wrap up your projects and prepare for submission.",
      icon: "⏰"
    },
    {
      date: "April 13th, 2025",
      title: "Mentership Round Starts",
      description: "Providing mentorship and feedback every submitted project",
      icon: "⏰"
    },
    {
      date: "April 15th, 2025",
      title: "Final pitching and closing ceremony.",
      description: "Don't miss out on this memorable event!",
      icon: "📅"
    }
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Timeline</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-content">
              <div className="timeline-icon">{event.icon}</div>
              <div className="timeline-date">{event.date}</div>
              <h3 className="timeline-event-title">{event.title}</h3>
              <p className="timeline-description">{event.description}</p>
              <div className="timeline-connector"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
