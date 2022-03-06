import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Particle from "../Particle";
//Imports tech icons
import {
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiMysql,
  DiGit,
} from "react-icons/di";


function Skills () {
  return (
    <Container fluid className="skill-section">
      <Particle />
      <Container>
        <Row>
        <h1 className="skill-heading">
          <strong className="blue">Skills</strong>
        </h1>
        </Row>
        
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={6} md={3} className="skill-icons">
        <DiHtml5 />
      </Col>
      <Col xs={6} md={3} className="skill-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={6} md={3} className="skill-icons">
        <DiNodejs />
      </Col>
      <Col xs={6} md={3} className="skill-icons">
        <DiReact />
      </Col>
      <Col xs={6} md={3} className="skill-icons">
        <DiMongodb />
      </Col>
      <Col xs={6} md={3} className="skill-icons">
        <DiMysql />
      </Col>
      <Col xs={6} md={3} className="skill-icons">
        <DiGit />
      </Col>
    </Row>
      </Container>
    </Container>
  );
}

export default Skills;