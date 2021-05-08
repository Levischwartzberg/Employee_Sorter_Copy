import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function About() {
  return (
    <div>
      <Hero backgroundImage="https://www.incimages.com/uploaded_files/image/1024x576/getty_152414899_97046097045006_68075.jpg">
        <h1>Employee Sorter</h1>
        <h2>All your favorite coworkers!</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Employee Sorter!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Welcome to Employee Sorter. Use the Employees link to see a list of (randomly generated for simulation purposes) employees
              which you can then sort by either searching for a name, or reorder by alphabetical order. 
            </p>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
