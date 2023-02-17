import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import LandingPage from "./components/LandingPage";
import { Login } from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = function () {
  return (
    <BrowserRouter>
      <div>
        {/* <main> */}
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/login" element={<Login />} exact />
          </Routes>
          <Footer />
        {/* </main> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
