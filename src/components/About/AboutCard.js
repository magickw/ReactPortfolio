import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="aboutme-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Baofeng Guo </span>
            from <span className="purple">San Francisco Bay Area</span>
            <br />I hold a Bachelor Degree in Science. I majored in Biology in college and have been working as an English - Chinese medical translator after graduation for more than 14 years. 4 years after moving to the Bay Area and inspired by its entrepreneurial atmosphere, I felt it's about time to make a change by pursuing a coding career. That's how it started. I am now currently trained at UC Berkeley Extension Coding Bootcamp for Full Stack Web Development. Do not hesitate to contact me if you need my services.
            <br />
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;