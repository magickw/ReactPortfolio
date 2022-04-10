import React from "react";
import { Container, Col, Row } from "react-bootstrap";
//Imports tech icons
import {
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHeroku
} from "react-icons/di";

import { SiMysql } from "react-icons/si";

import { 
  BsFillBootstrapFill
} from "react-icons/bs";


function Skills () {
  return (
    <Container fluid className="skill-section">
      <Container>
        <Row>
        <h1 className="skill-heading">
          <strong className="white">Skills</strong>
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
        <SiMysql />
      </Col>
      <Col xs={6} md={3} className="skill-icons">
        <DiGit />
      </Col>
      <Col xs={6} md={3} className="skill-icons">
        <DiHeroku />
      </Col>
      <Col xs={6} md={3} className="skill-icons">
        <BsFillBootstrapFill />
      </Col>
    </Row>
      </Container>
    </Container>
  );
}

export default Skills;