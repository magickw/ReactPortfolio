
import { Container, Row, Col } from "react-bootstrap";

//imports social icons
import { 
  FaGithubSquare,
  FaLinkedin,
 } from "react-icons/fa";

 import { 
    ImEnvelop
   } from "react-icons/im";

import React, { useState, useEffect } from "react";
import ContactForm from "./ContactForm";

function Contact() {
     useEffect(() => {
     }, []);
     return (
      <section>
      <Container fluid className="contact-section">
      <Row style={{ justifyContent: "center", padding: "10px" }}>
          {/* left side */}
         <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Connect <strong className="yellow">Me</strong>
            </h1>
            <Col
            md={5}
            style={{
              justifyContent: "end",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h4>
             <a
               href="https://www.linkedin.com/in/bfguo/"
               rel="noreferrer"
               target="_blank"
             >
               <FaLinkedin /> Linkedin
             </a>
           </h4>
           <h4>
             <a
               href="https://github.com/magickw"
               rel="noreferrer"
               target="_blank"
             >
               <FaGithubSquare /> Github
             </a>
           </h4>

           <h4>
           <a
               href="mailto:peterguo1983@gmail.com"
               rel="noreferrer"
               target="_blank"
             ><ImEnvelop />Email
             </a>
             </h4>
          </Col>
          
          {/* right side */}
          <Col md={5}
            style={{ paddingTop: "100px", paddingBottom: "50px" }}
            className="contact-form"
          >
              <ContactForm />
            </Col>
        </Row>
         </Container>
         </section>

     );
   }
export default Contact;