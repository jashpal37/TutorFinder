import React from 'react';
import { Container,Button, Grid } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function Home() {

  const location = useLocation();
  let emailData = location.state.emailData;
  // let Id = location.state.Id;
  console.log(location.state);
  

  const navigate = useNavigate();
  function handleEmail(){
    navigate("/tutor", { state : { email : emailData}})
  }

  function gotoSubject() {
    navigate("/subject");
  }

  function gotoAddCourse() {
    navigate("/mycourse");
  }

  return (
    <>
      <Container>
        <Grid>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Tutor Finder</h1>
              <p className="subtitle">
                One place for all Student and Teachers.
              </p>
            </div>
            <div className="buttonContainer">
              <Button
                variant="contained"
                onClick={handleEmail}
                sx={{ maxHeight: "150px", maxWidth: "150px" }}
              >
                Become a Tutor
              </Button>
              <Button
                variant="contained"
                onClick={gotoSubject}
                sx={{ maxHeight: "150px", maxWidth: "150px" }}
              >
                Find a Tutor
              </Button>
              <Button
                variant="contained"
                onClick={gotoAddCourse}
                sx={{ maxHeight: "150px", maxWidth: "150px" }}
              >
                Add Course
              </Button>
            </div>
          </div>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
