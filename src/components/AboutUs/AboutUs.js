import React from "react";
import "./AboutUs.css";

const teams = [
  { name: "AMV Team", description: "Lorem ipsum dolor sit amet.", icon: "🎥" },
  { name: "WebD Team", description: "Lorem ipsum dolor sit amet.", icon: "💻" },
  { name: "Quiz Team", description: "Lorem ipsum dolor sit amet.", icon: "📝" },
  { name: "DNA Team", description: "Lorem ipsum dolor sit amet.", icon: "🔬" },
  { name: "MN Team", description: "Lorem ipsum dolor sit amet.", icon: "🖌️" },
];

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-text">
        <h2>About Us</h2>
        <p>OUR SOCIETY CONSISTS OF FIVE TEAMS.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat
          vulputate nisi est.
        </p>
        <button className="meet-teams">Meet the Teams →</button>
      </div>
      <div className="team-cards">
        {teams.map((team, index) => (
          <div key={index} className={`team-card ${team.name === "Quiz Team" ? "highlight" : ""}`}>
            <span className="team-icon">{team.icon}</span>
            <h3>{team.name}</h3>
            <p>{team.description}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default AboutUs;
