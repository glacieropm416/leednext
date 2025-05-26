import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Problems from "./pages/Problems";
import Contest from "./pages/Contest";
import Explore from "./pages/Explore";
import UserProfile from "./components/UserProfile";
import Premium from "./components/Premium";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Home darkMode={darkMode} />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/contest" element={<Contest />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/premium" element={<Premium />} />
      </Routes>
    </>
  );
}

export default App;
