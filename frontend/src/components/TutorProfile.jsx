import React from "react";
import { TextField,Button } from "@mui/material";
import "./styles/TutorProfile.css"

function TutorProfile() {
  return (
    <>
      <div className="root">
        <div className="ProfileContainer">
          <div className="ProfileBox">
            <h2 className="ProfileTitle">Create Tutor Profile</h2>
            <form className="ProfileForm" id="ProfileForm" method="POST">
              <div className="TutorName">
                <TextField
                  type="text"
                  name="name"
                  id="name"
                  label="Name"
                  variant="standard"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="TutorMail">
                <TextField
                  name="email"
                  type="email"
                  id="email"
                  label="Email"
                  variant="standard"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="TutorPhone">
                <TextField
                  type="number"
                  name="phone"
                  id="phone"
                  label="Mobile No"
                  SelectProps={{ IconComponent: () => null }}
                  variant="standard"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="SubjectName">
                <TextField
                  type="text"
                  name="subjectname"
                  id="subjectname"
                  label="Subject Name"
                  variant="standard"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="SubjectCode">
                <TextField
                  type="text"
                  name="subjectcode"
                  id="subjectcode"
                  label="Subject Code"
                  variant="standard"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="SubjectDescription">
                <TextField
                  type="text"
                  name="subjectdesc"
                  id="subjectdesc"
                  label="Subject Description"
                  variant="standard"
                  required
                  multiline
                  autoComplete="off"
                />
              </div>
              <div className="TutorButton">
                <Button
                  type="submit"
                  // onClick={sendToServer}
                  id="tutorbutton"
                  variant="contained"
                  style={{
                    fontFamily: "cursive",
                  }}
                >
                  Add
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TutorProfile;
