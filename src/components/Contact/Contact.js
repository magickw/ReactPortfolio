
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
import Form from "./Form";

function Contact() {
     useEffect(() => {
     }, []);
     return (
       <section className="row" id="contact">
         <div className="col-md-5 d-flex flex-column" id="contact-info">
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
       
         </div>
   
         <div className="col-md-5">
         <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Connect <strong className="yellow">Me</strong>
            </h1>
   
           <div>
             {/* <Form /> */}
           </div>
         </div>
       </section>
     );
   }
export default Contact;