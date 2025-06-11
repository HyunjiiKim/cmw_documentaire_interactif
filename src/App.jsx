import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

// pages
import Charging from "./pages/Charging";
import Home from "./pages/Home";
import Map from "./pages/Map";
import View from "./pages/View";
import Documentary from "./pages/Documentary";

// components
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <Router>
      {location.pathname !== "/" && <Header withText={true} />}
      <Routes>
        <Route path="/" element={<Charging />} />
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/documentary" element={<Documentary />} />
        <Route path="/view/:id" element={<View />} />
      </Routes>
    </Router>
  );
}

export default App;
