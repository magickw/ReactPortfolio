import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import astroDash from "../../images/AstroDash.gif";
import codeQuiz from "../../images/codequiz.gif";
import AstroDash from "../../images/AstroDash.gif";
import AstroDash from "../../images/AstroDash.gif";
import AstroDash from "../../images/AstroDash.gif";
import AstroDash from "../../images/AstroDash.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Portfolio</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={astroDash}
              title="AstroDash"
              description="CodeQuiz is a timed coding quiz with multiple-choice questions."
              repo_url="https://github.com/magickw/CodeQuiz"
              deployed_url="https://magickw.github.io/CodeQuiz/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
