import "./App.css";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage";
import  Login  from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage"
import TutorProfile from "./components/TutorProfile";
import TutorCard from "./components/TutorCard";
import Adminlogin from "./components/Adminlogin";

const App = function () {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/signup" element={<Register />} exact />
          <Route path="/home" element={<Home/>} />
          <Route path="/tutor" element={<TutorProfile />} />
          <Route path="/subject" element={<TutorCard />} />
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="*" element={<ErrorPage />} />
          
          
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
