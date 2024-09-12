import React from "react";
import Description from "../components/Description";
import Resume from "../components/Resumer"; // Ensure correct component name
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import background from "../images/backgound.png";

function HomePage() {
  return (
    <>
      <Description />
      <Resume />
      <h1 className="text-center mt-5">Specilizing In</h1>
      <p className="text-center">
        Explore my expertise in these key areas where I excel in delivering
        exceptional results
      </p>{" "}
      <Row className="justify-content-center">
        <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
          <Cards
            title="UI/UX Design"
            description="Craft intuitive and visually stunning interfaces that elevate user experiences and solve real-world problems."
            link="https://example.com"
            backColor="#f8ff38"
          />
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
          <Cards
            title="Web Development"
            description="Proficient in developing responsive web applications with React and the MERN stack, emphasizing performance and scalability."
            link="https://example.com/web-development"
            backColor="blue"
          />
        </Col>
        <Col xs={12} md={4} className="d-flex justify-content-center mb-4">
          <Cards
            title="Project Management"
            description="Skilled in overseeing projects from start to finish, utilizing agile methodologies to ensure timely and budget-friendly delivery."
            link="https://example.com/project-management"
            backColor="red"
          />
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default HomePage;
