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

  return (
    <>
      {/* <div className="root"> */}
        <div className="SignUpContainer">
          <div className="SignUpBox">
            <h2 className="SignUpTitle">SignUp</h2>
            <form className="SignUpForm" id="SignUpForm">
              <div className="SignUpName">
                <TextField
                  type="text"
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
                  autoFocus
                  autoComplete="off"
                />
              </div>
              <div className="SignUpPhone">
                <TextField
                  type="number"
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
                  autoFocus
                  autoComplete="off"
                />
              </div>
              <div className="SignUpPassword">
                <TextField
                  type={showPassword ? "text" : "password"}
                  id="password"
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
                  autoFocus
                  autoComplete="off"
                />
              </div>
              <div className="SignUpCPassword">
                <TextField
                  type={showCPassword ? "text" : "password"}
                  id="cpassword"
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
                  autoFocus
                  autoComplete="off"
                  style={{
                    fontFamily: "cursive",
                  }}
                />
              </div>
              <div className="SignUpButton">
                <Button
                  type="submit"
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
                      fontSize:17,
                    }
                  : {
                      color: "blue",
                      fontFamily: "cursive",
                      fontSize:17,
                    }
              }
            >
              already register?
            </NavLink>
          </div>
        </div>
      {/* </div> */}
    </>
  );
}

export default Register;
