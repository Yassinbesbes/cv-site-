import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";

function About() {
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = {
    introduction: {
      title: "Introduction",
      description: "Hi! I am Yassin Besbes, a passionate web developer with a focus on modern technologies and intuitive user experiences.",
    },
    skills: {
      title: "Skills",
      description: "My key skills include HTML, CSS, JavaScript, React, Node.js, MongoDB, SQL, PHP, and cloud computing with AWS and Google Cloud.",
    },
    history: {
      title: "History",
      description: "I have worked on several projects, including e-commerce websites, donation apps, and speed connection services. I also completed a Full Stack internship at Digi Growing in Mahdia, Tunisia.",
    },
  };

  return (
    <Container>
      <h1 className="text-center mb">Me, Myself, And I</h1>
      <h6 className="text-center mb-5">Learn More About Me</h6>
      <Row className="mb-3">
        <Col md={3} className="links-section">
          <ol>
            <li>
              <Link to="#" onClick={() => setActiveSection("introduction")}>Introduction</Link>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveSection("skills")}>Skills</Link>
            </li>
            <li>
              <Link to="#" onClick={() => setActiveSection("history")}>History</Link>
            </li>
          </ol>
        </Col>
        <Col md={9} className="content-section">
          <p className="text-center mb">{sections[activeSection].description}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
