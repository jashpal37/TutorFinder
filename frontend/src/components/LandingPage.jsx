import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import "./styles/LandingPage.css"


const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Tutor Finder</h1>
              <p className="subtitle">One place for all Student and Teachers.</p>
            </div>
            <div className="buttonContainer">
              <a href="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </a>
              <a href="/signup">
                <Button size="lg" className="landingbutton" variant='outline-primary'>
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
