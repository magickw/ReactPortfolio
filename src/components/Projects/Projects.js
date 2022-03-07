import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//components
import ProjectCard from "./ProjectCards";

//Project data
import astroDash from "../../assets/AstroDash.gif";
import codeQuiz from "../../assets/codequiz.gif";
import weatherDashboard from "../../assets/WeatherDashboard.gif";
import scheduler from "../../assets/scheduler.gif";
import notetaker from "../../assets/notetaker.gif";
import techblog from "../../assets/techblog.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Recent <strong className="yellow">Work</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              img_path={astroDash}
              title="AstroDash"
              description="Astronomy Dashboard uses geolocation functions and weather API to present the weather conditions such as visibility and cloudiness, and moon phases."
              repo_url="https://github.com/DazedChou/Astronomy-Dashboard"
              deployed_url="https://dazedchou.github.io/Astronomy-Dashboard/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img_path={codeQuiz}
              title="CodeQuiz"
              description="CodeQuiz is a timed coding quiz with multiple-choice questions."
              repo_url="https://github.com/magickw/CodeQuiz"
              deployed_url="https://magickw.github.io/CodeQuiz/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img_path={weatherDashboard}
              title="Weather Dashboard"
              description="It's a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS."
              repo_url="https://github.com/magickw/WeatherDashboard"
              deployed_url="https://magickw.github.io/WeatherDashboard/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img_path={scheduler}
              title="Work Day Scheduler"
              description="This simple calendar application that allows a user to save and delete events for each hour of the day."
              repo_url="https://github.com/magickw/Work-Day-Scheduler"
              deployed_url="https://magickw.github.io/Work-Day-Scheduler/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img_path={notetaker}
              title="Note Taker"
              description="This application allows you to write notes, save notes and deletes that are being stored in a db.json file."
              repo_url="https://github.com/magickw/NoteTaker"
              deployed_url="https://notetaker-guo.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              img_path={techblog}
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
