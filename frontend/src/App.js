import "./App.css";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage";
import  Login  from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";

const App = function () {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/signup" element={<Register />} exact />
        </Routes>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
