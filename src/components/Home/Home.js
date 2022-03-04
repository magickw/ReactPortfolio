import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../../images/profile.jpg";
import Particle from "../Particle";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello! Welcome to My Portfolio Website.
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> BAOFENG GUO</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={profileImg} alt="profile image" className="img-fluid" style="width:160px;border-radius:50%"/>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
