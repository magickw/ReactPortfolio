import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import cv from "../../assets/cv.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Resume() {


  return (
    <Container fluid className="resume-section">
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={cv} target="_blank">
            <FaCloudDownloadAlt />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">

        <embed
          className="resume"
          src={cv}
          width="600"
          height="700"
        ></embed>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={cv} target="_blank">
            <FaCloudDownloadAlt />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;