import React from "react";
import { Col, Row } from "react-bootstrap";
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
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="skill-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="skill-icons">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Skills;