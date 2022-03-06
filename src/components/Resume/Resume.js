import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Document, Page } from "react-pdf";
import Particle from "../Particle";
import cv from "../../assets/cv.pdf";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Resume() {
  const resumeLink = "https://github.com/magickw/ReactPortfolio/blob/main/src/assets/cv.pdf";
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

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
        <Document file={resumeLink}>
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
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