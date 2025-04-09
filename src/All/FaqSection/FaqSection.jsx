import React from "react";
import "./FaqSection.css";


export const FaqSection = () => {
  return (
    <div className="faq-container">
      <h1 className="faq-title">Frequently Asked Questions</h1>
      <div className="faq">
        <details>
          <summary>Who can contribute?</summary>
          <p>Anyone with a passion for innovation, regardless of background!</p>
        </details>

        <details>
          <summary>Where can we reach out in case of queries?</summary>
          <p>You can contact us via our official email or Discord server.</p>
        </details>

        <details>
          <summary>Do I need to have coding experience to participate?</summary>
          <p>Nope! Beginners are welcome. Teams can include coders and non-coders.</p>
        </details>

        <details open>
          <summary>What happens after the hackathon ends?</summary>
          <p>
            After the hackathon concludes, top 10 teams will be invited to present their
            projects to judges and fellow participants during the final pitching round at IGDTUW.
            Winners will be announced, and prizes awarded based on the judging criteria. 
            Date for this is 15th April, 2025.
          </p>
        </details>

        <details>
          <summary>How can I stay updated on hackathon announcements and events?</summary>
          <p>Follow our social media channels and keep an eye on your registered email!</p>
        </details>
      </div>
    </div>
  );
};
