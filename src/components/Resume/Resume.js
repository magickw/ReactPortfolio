import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import cv from "../../assets/cv.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Resume() {

  const resumeLink = "https://github.com/magickw/ReactPortfolio/blob/main/src/assets/cv.pdf";
  

  return (
    <Container fluid className="resume-section">
      <Particle />
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
          src={resumeLink}
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