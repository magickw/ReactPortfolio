import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import profileImg from "../../assets/profile.jpg";
import Skills from "./Skills";


function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* left side */}
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="yellow">Me</strong>
            </h1>

            <Aboutcard />

          </Col>
          {/* right side */}
          <Col md={5}
            style={{ paddingTop: "100px", paddingBottom: "50px" }}
            className="about-img"
          >
              <img src={profileImg} alt="profile-img" className="img-fluid" />
            </Col>
        </Row>

        <Row>
        <Skills />
        </Row>
      </Container>
    </Container>
  );
}

export default About;

