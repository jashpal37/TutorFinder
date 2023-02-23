import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import loginpic from "./../signin.svg";
import { TextField, Button, InputAdornment, IconButton } from "@mui/material";
import {
  LockOpen,
  MailOutlined,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import "./styles/Login.css"

function Login() {

const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword((show) => !show);


const handleMouseDownPassword = (event) => {
  event.preventDefault();
};

  return (
    <>
      <div className="SignInContainer">
        <div className="SignInimage">
          <figure>
            <img src={loginpic} alt="loginimage" />
          </figure>
          <NavLink
            to="/signup"
            className="SignInImgLink"
            style={({ isActive }) =>
              isActive
                ? {
                    color: "black",
                    fontFamily: "cursive",
                  }
                : {
                    color: "blue",
                    fontFamily: "cursive",
                  }
            }
          >
            Create a New Account ?
          </NavLink>
        </div>
        <div className="SignInBox">
          <h2 className="SignInTitle">SignIn</h2>
          <form className="SigninForm" id="SignInForm">
            <div className="SignInMail">
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
            <div className="SignInPassword">
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
                autoComplete="off"
              />
            </div>
            <NavLink
              to="/forgotpassword"
              className="ForgotPasswordLink"
              style={({ isActive }) =>
                isActive
                  ? {
                      color: "black",
                      fontFamily: "cursive",
                    }
                  : {
                      color: "blue",
                      fontFamily: "cursive",
                    }
              }
            >
              Forgot Password ?
            </NavLink>
            <div className="SignInButton">
              <Button
                type="submit"
                id="signin"
                variant="contained"
                style={{
                  fontFamily: "cursive",
                }}
              >
                Log In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
