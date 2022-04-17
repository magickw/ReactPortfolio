import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileImg from "../../assets/profile.jpg";
import Type from "./Type";
import { ImLocation2 } from "react-icons/im";

import emoji from "react-easy-emoji";
// Animation
import { motion } from "framer-motion";

const contentVariants = {
  initial: {
    translateX: "-100vw",
    opacity: 0,
  },

  animate: {
    translateX: "0vw",
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
          <motion.div
        className="content"
        variants={contentVariants}
        initial="initial"
        animate="animate"
      >
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
            </motion.div>
            <Col md={5} style={{ justifyContent: "center", paddingBottom: 20 }}>
              <img src={profileImg} alt="profile" className="img-fluid"/>
              <ImLocation2 style={{ fontSize: "2em",  paddingTop: "10px" }}> <i>San Fransico Bay Area</i>
              </ImLocation2>
            </Col>
          </Row>
          
        </Container>
      </Container>
    </section>
  );
}

export default Home;
