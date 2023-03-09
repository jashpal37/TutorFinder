import React,{useState} from "react";
import { TextField,Button } from "@mui/material";
import "./styles/TutorProfile.css";
import "./styles/PopUp.css";
import { useLocation } from "react-router-dom";

function TutorProfile() {

  const location = useLocation();
  const email = location.state.email;
  // console.log(email);


  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    console.log("togglemodel");
    setModal(!modal);
  };
  const acceptModal = () => {
    console.log("acceptmodel");
    setModal(!modal);
  };
  const closeModal = () => {
    console.log("closemodel");
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }



  const [tutorData, setTutorData] = useState({
    tutorName: "",
    tutorEmail: "",
    tutorPhone: "",
    subjectName: undefined,
    subjectCode: "",
    subjectDescription: "",
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
  const serverUrl = "http://localhost:8000/addtutor";
  const sendToServer = async (e) => {
    e.preventDefault();
    const {tutorName, tutorEmail, tutorPhone, subjectName, subjectCode, subjectDescription} = tutorData;
    const res = await fetch(serverUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tutorName,
        tutorEmail,
        tutorPhone,
        subjectName,
        subjectCode,
        subjectDescription
      })
    });
    if (res.status === 201) {
      window.alert("Success");
      window.location.href = "/subject";
    }
    else {
      window.alert("Invalid data");
    }

  }
  return (
    <>
      <div className="ProfileContainer">
        <div className="ProfileBox">
          <h2 className="ProfileTitle">Create Tutor Profile</h2>
          <form className="ProfileForm" id="ProfileForm" method="POST">
            <div className="TutorName">
              <TextField
                type="text"
                name="tutorName"
                value={tutorData.tutorName}
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
                name="tutorEmail"
                value={email}
                type="email"
                id="email"
                label="Email"
                variant="standard"
                required
                autoComplete="off"
                disabled
              />
            </div>
            <div className="TutorPhone">
              <TextField
                type="number"
                name="tutorPhone"
                value={tutorData.tutorPhone}
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
                name="subjectName"
                value={tutorData.subjectName}
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
                name="subjectCode"
                value={tutorData.subjectCode}
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
                name="subjectDescription"
                value={tutorData.subjectDescription}
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
                onClick={toggleModal}
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
      {modal && (
        <div className="active-modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Hello Modal</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
              id fugit, dignissimos maxime non natus placeat illo iusto!
              Sapiente dolorum id maiores dolores? Illum pariatur possimus
              quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
              placeat tempora vitae enim incidunt porro fuga ea.
            </p>
            <button className="accept-modal" onClick={acceptModal} >
              ACCEPT
            </button>
            <button className="close-modal" onClick={closeModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default TutorProfile;
