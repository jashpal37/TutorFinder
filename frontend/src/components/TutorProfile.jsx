import React,{useState} from "react";
import { TextField,Button } from "@mui/material";
import "./styles/TutorProfile.css"

function TutorProfile() {
  const [tutorData, setTutorData] = useState({

  })
  let name, value;
  const handelInput = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setTutorData({
      ...tutorData,
      [name]: value,
    });
  };
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
                  onChange={handelInput}
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
                  onChange={handelInput}
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
                  onChange={handelInput}
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
                  onChange={handelInput}
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
                  onChange={handelInput}
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
                  onChange={handelInput}
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
