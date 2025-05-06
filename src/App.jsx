import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

// pages
import Home from "./pages/Home";
import Map from "./pages/Map";
import View from "./pages/View";
import Documentary from "./pages/Documentary";

// components
import Header from "./components/Header";
import LanguageSwitch from "./components/Switch";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/documentary" element={<Documentary />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
      <Header withText />
      <LanguageSwitch className="z-10" />
    </Router>
  );
}

export default App;
