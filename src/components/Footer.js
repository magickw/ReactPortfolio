import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//imports social icons

import { 
  FaGithubSquare,
  FaTwitterSquare,
  FaLinkedin
 } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-author">
          <h3>{year} © Baofeng Guo | Thank you for visiting. </h3>
        </Col>
        <Col md="6" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/magickw"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/bfguo"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaTwitterSquare />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/bfguo/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
