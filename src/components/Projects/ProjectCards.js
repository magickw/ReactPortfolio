import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
//external link icon
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.img_path} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.repo_url} target="_blank">
          <BiLinkExternal /> View Repo
        </Button>  
        
        <Button variant="primary" href={props.deployed_url} target="_blank">
          <BiLinkExternal /> View App
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
