import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login/Login";
import Splashscreen from "./Components/Splashscreen";
import Nutrition from "./Components/Pages/Nutrition";
import Organic from "./Components/Pages/Organic";
import Navbar from "./Components/Sidebar/Navbar";

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";
  return (
    <>
      <Navbar show={showNavbar} />
      <Routes>
        <Route path="/" element={<Splashscreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Navbar />} />
        <Route exact path="/nutrition" element={<Nutrition />} />
        <Route exact path="/organic" element={<Organic />} />
      </Routes>
    </>
  );
}

export default App;
