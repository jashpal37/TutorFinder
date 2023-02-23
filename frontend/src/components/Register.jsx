import {
  AccountBox,
  Lock,
  LockOpen,
  MailOutlined,
  PhoneInTalk,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import React from "react";
import { useState } from "react";
import "./styles/Register.css";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import signpic from "./../signup.svg";

function Register() {

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showCPassword, setShowCPassword] = useState(false);
  const handleClickShowCPassword = () => setShowCPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: null,
    password: "",
    cpassword: ""
  });
  let name, value;
  const handelInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  }
  const serverUrl = "http://localhost:8000/register";
  const sendToServer = async (e) => {
    e.preventDefault();
    const {name, email, phone, password, cpassword} = user;
    const res = await fetch(serverUrl, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword
      })
    });
    const result = res.json();
    if (result.status === 201) {
      console.log(result.status);
      window.alert("Invalid data");
    }
    else {
      window.alert("Success"); 
      // <h1> Demo Purpose</h1>
      // setTimeout(() => {
      //     <div className="SignUpMessage">
      //       <h1>Registrayion Successfull !!!</h1>
      //     </div>;
      // },3000);
      window.location.href = "/login";
    }

  }
  return (
    <>
      <div className="root">
      <div className="SignUpContainer">
        <div className="SignUpBox">
          <h2 className="SignUpTitle">SignUp</h2>
          <form className="SignUpForm" id="SignUpForm" method="POST">
            <div className="SignUpName">
              <TextField
                type="text"
                name="name"
                value={user.name}
                onChange={handelInput}
                id="name"
                label="Name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment className="AccountIcon">
                      <AccountBox />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: { fontFamily: "cursive", fontSize: 20 },
                }}
                variant="standard"
                required
                autoFocus
                autoComplete="off"
              />
            </div>
            <div className="SignUpMail">
              <TextField
                name="email"
                value={user.email}
                onChange={handelInput}
                type="email"
                id="email"
                label="Email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment className="MailIcon">
                      <MailOutlined />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: { fontFamily: "cursive", fontSize: 20 },
                }}
                variant="standard"
                required
                autoComplete="off"
              />
            </div>
            <div className="SignUpPhone">
              <TextField
                type="number"
                name="phone"
                value={user.phone}
                onChange={handelInput}
                id="phone"
                label="Mobile No"
                InputProps={{
                  startAdornment: (
                    <InputAdornment className="PhoneIcon">
                      <PhoneInTalk />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: { fontFamily: "cursive", fontSize: 20 },
                }}
                SelectProps={{ IconComponent: () => null }}
                variant="standard"
                required
                autoComplete="off"
              />
            </div>
            <div className="SignUpPassword">
              <TextField
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={user.passwords}
                onChange={handelInput}
                label="Password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment className="LockopenIcon">
                      <LockOpen />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: { fontFamily: "cursive", fontSize: 20 },
                }}
                variant="standard"
                required
                autoComplete="off"
              />
            </div>
            <div className="SignUpCPassword">
              <TextField
                type={showCPassword ? "text" : "password"}
                id="cpassword"
                name="cpassword"
                value={user.cpassword}
                onChange={handelInput}
                label="ConfirmPassword"
                InputProps={{
                  startAdornment: (
                    <InputAdornment className="LockIcon">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowCPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showCPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  style: { fontFamily: "cursive", fontSize: 20 },
                }}
                variant="standard"
                required
                autoComplete="off"
                style={{
                  fontFamily: "cursive",
                }}
              />
            </div>
            <div className="SignUpButton">
              <Button
                type="submit"
                onClick={sendToServer}
                id="signup"
                variant="contained"
                style={{
                  fontFamily: "cursive",
                }}
              >
                Register
              </Button>
            </div>
          </form>
        </div>
        <div className="SignUpimage">
          <figure>
            <img src={signpic} alt="registrationimage" />
          </figure>
          <NavLink
            to="/login"
            className="signupimglink"
            style={({ isActive }) =>
              isActive
                ? {
                  color: "black",
                  fontFamily: "cursive",
                  fontSize: 17,
                }
                : {
                  color: "blue",
                  fontFamily: "cursive",
                  fontSize: 17,
                }
            }
          >
            already register?
          </NavLink>
        </div>
      </div>
      </div>
    </>
  );
}

export default Register;
