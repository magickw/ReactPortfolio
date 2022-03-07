import React from "react";
import { Container, Row, Col } from "react-bootstrap";

//imports social icons
import { 
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin,
 } from "react-icons/fa";

 import { 
    ImEnvelop
   } from "react-icons/im";

function Contact() {
  return (
    <Container fluid className="home-contact-section" id="contact">
      <Container>
        <Row>
          <Col md={12} className="home-contact-social">
            <h1>Contact</h1>
            <p>
              Feel free to <span className="yellow">contact </span> me
            </p>
            <ul className="home-contact-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/magickw"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <FaGithubSquare />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/bfguo"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <FaTwitterSquare />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/bfguo/"
                  target="_blank"
                  rel="noreferrer"
                  className="home-social-icons"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:peteguo1983@gmail.com"
                  className="home-social-icons"
                >
                  <ImEnvelop />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Contact;