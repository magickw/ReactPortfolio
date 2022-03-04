import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../../Particle";

import astroDash from "../../images/AstroDash.gif";
import codeQuiz from "../../images/codequiz.gif";
import weatherDashboard from "../../images/WeatherDashboard.gif";
import scheduler from "../../images/scheduler.gif";
import notetaker from "../../images/notetaker.gif";
import techblog from "../../images/techblog.gif";

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
              repo_url="https://github.com/DazedChou/Astronomy-Dashboard"
              deployed_url="https://dazedchou.github.io/Astronomy-Dashboard/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeQuiz}
              title="CodeQuiz"
              description="CodeQuiz is a timed coding quiz with multiple-choice questions."
              repo_url="https://github.com/magickw/CodeQuiz"
              deployed_url="https://magickw.github.io/CodeQuiz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherDashboard}
              title="Weather Dashboard"
              description="Full-stack CMS-style blog site where developers can publish and comment, using MVC architectural structure, Handlebars.js, Sequelize, and express-session."
              repo_url="https://github.com/magickw/WeatherDashboard"
              deployed_url="https://magickw.github.io/WeatherDashboard/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scheduler}
              title="Weather Dashboard"
              description="It's a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS."
              repo_url="https://github.com/magickw/Work-Day-Scheduler"
              deployed_url="https://magickw.github.io/Work-Day-Scheduler/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notetaker}
              title="Note Taker"
              description="This application allows you to write notes, save notes and deletes that are being stored in a db.json file."
              repo_url="https://github.com/magickw/NoteTaker"
              deployed_url="https://notetaker-guo.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techblog}
              title="Tech Blog"
              description="This application is a tech blog which allows the developers to publish blog posts, make comments and create accounts using MVC architectural structure, Handlebars.js, Sequelize."
              repo_url="https://github.com/magickw/MVCTechBlog"
              deployed_url="https://guotechblog.herokuapp.com/"
            />
          </Col>
       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
