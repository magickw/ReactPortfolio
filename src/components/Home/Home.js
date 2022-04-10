import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../../assets/profile.jpg";
import Type from "./Type";

import emoji from "react-easy-emoji";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>

              <h1 className="heading-name">
                I'M <strong className="official-name">BAOFENG GUO</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={profileImg} alt="profile" className="img-fluid"/>
            </Col>
          </Row>
          
        </Container>
      </Container>
    </section>
  );
}

export default Home;
