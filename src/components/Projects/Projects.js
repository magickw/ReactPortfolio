import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//components
import ProjectCard from "./ProjectCards";
import projectData from './ProjectData';



function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading text-center">
          Recent <strong className="yellow">Work</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
               {projectData.map(project => (
                 <Col md={4} className="project-card">
                <ProjectCard
                key={project.id}
              title={project.title}
              description={project.description}
              repo_url={project.repo_url}
              deployed_url={project.deployed_url}
              img_path={project.img_path}
                />
          </Col>
 ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
