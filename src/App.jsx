import React from "react";
import Footer from "./footer/PageFooter.jsx";
import Navbar from "./components/Navbar.jsx";
import { Route, Routes } from "react-router-dom";
import MainBody from "./components/MainBody.jsx"; // Import MainBody

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<MainBody />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
