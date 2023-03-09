import React from "react";
import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
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
  const [userlogin, setUserLogin] = useState({
    name: "",
    password: ""
  });

  let name, value;
  const handelInput = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;
    setUserLogin({
      ...userlogin,
      [name]: value,
    });
    
  };
  const serverUrl = "http://localhost:8000/adminsignin";
  const navigate = useNavigate();
  const authenticate = async (e) => {
    e.preventDefault();
    try {
      const { email, password } = userlogin;
      
      const res = await fetch(serverUrl, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      
      if (res.status === 200) {
        window.alert("Login successful");
        //const result = await res.json();
        //console.log(result.data._id);
        navigate("/admin", { state: { emailData: userlogin.email } });
        // window.location.href = "/home";
      }
      else if (res.status === 422) {
        window.alert("Invalid credentials");
        window.location.href = "/login";
      }
      else if (res.status === 404) {
        window.alert("Please register your account");
        window.location.href = "/register";
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="SignInContainer">
        <div className="SignInimage">
          <figure>
            <img src={loginpic} alt="loginimage" />
          </figure>
          {/* <NavLink
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
          </NavLink> */}
        </div>
        <div className="SignInBox">
          <h2 className="SignInTitle">SignIn</h2>
          <form className="SigninForm" id="SignInForm" method="POST">
            <div className="SignInMail">
              <TextField
                type="email"
                name="email"
                value={userlogin.email}
                onChange={handelInput}
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
                name="password"
                value={userlogin.password}
                onChange={handelInput}
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
                onClick={authenticate}
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
