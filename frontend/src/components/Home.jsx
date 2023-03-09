import React from 'react';
import { Container, Button, Row } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Tutor Finder</h1>
              <p className="subtitle">
                One place for all Student and Teachers.
              </p>
            </div>
            <div className="buttonContainer">
              <a href="/tutor">
                <Button
                  size=""
                  className="landingbutton"
                  variant="outline-primary">
                  Become a Tutor.
                </Button>
              </a>
              <a href="/subject">
                <Button
                  size=""
                  className="landingbutton"
                  variant="outline-primary"
                >
                  Find a Tutor.
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Home;
